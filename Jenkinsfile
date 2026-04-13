
pipeline {
  agent any

  environment {
    AWS_REGION = "us-east-1"
    VITE_BASE_URL = "/api"
    EMAIL_TO   = "ramdaskayande637@gmail.com"


    GIT_REPO   = "https://github.com/Akashkayande/jenkins-eks-argocd.git"
    GIT_BRANCH = "main"
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: "${GIT_BRANCH}", url: "${GIT_REPO}",credentialsId: 'github-pat'
      }
    }

    stage('Prepare AWS Variables') {
      steps {
        withCredentials([
          string(credentialsId: 'aws-account-id', variable: 'AWS_ACCOUNT_ID')
        ]) {
          script {
            env.ECR_REGISTRY = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
          }
        }
      }
    }

    stage('Build & Push Canary Images') {
      steps {
        withAWS(credentials: 'aws-prod-creds', region: "${AWS_REGION}") {
          sh '''
            aws ecr get-login-password \
              | docker login --username AWS --password-stdin $ECR_REGISTRY

            docker build -t $ECR_REGISTRY/backend:$BUILD_NUMBER ./server
            docker build --build-arg VITE_BASE_URL=$VITE_BASE_URL -t $ECR_REGISTRY/frontend:$BUILD_NUMBER ./client

            docker push $ECR_REGISTRY/backend:$BUILD_NUMBER
            docker push $ECR_REGISTRY/frontend:$BUILD_NUMBER
          '''
        }
      }
    }

    stage('Update Canary Tags') {
      steps {
        sh '''
          yq e -i '.backend.canary.tag = strenv(BUILD_NUMBER)' helm/mern/values.yaml
          yq e -i '.frontend.canary.tag = strenv(BUILD_NUMBER)' helm/mern/values.yaml
        '''
      }
    }

    stage('Commit & Push') {
      steps {
        sh '''
          git config user.name "jenkins"
          git config user.email "jenkins@ci.local"

          git add helm/mern/values.yaml
          git commit -m "canary: deploy build $BUILD_NUMBER [skip ci]" || echo "No changes to commit"
          git push origin $GIT_BRANCH
        '''
      }
    }
  }
  post {

    success {
      emailext(
        to: "${EMAIL_TO}",
        subject: "✅ Canary deployment triggered (Argo CD will sync)| Build #${BUILD_NUMBER}",
        body: """
        Hello Team,

        The canary deployment has been completed successfully.

        🔹 Backend Canary Version : backend:${BUILD_NUMBER}
        🔹 Frontend Canary Version : frontend:${BUILD_NUMBER}

        ✔️ Traffic is partially routed to the new canary instances
        ✔️ Stable production version remains unchanged
        ✔️ Monitoring and health checks have been initiated

        If any issues are observed, canary can be rolled back safely.

        Regards,
        DevSecOps Pipeline
        """
      )
    }

    failure {
      emailext(
        to: "${EMAIL_TO}",
        subject: "❌ Canary Deployment Failed | Build #${BUILD_NUMBER}",
        body: """
        Hello Team,

        The canary deployment for Build #${BUILD_NUMBER} has failed.

        ❗ Deployment Status: FAILED
        ❗ Stable Production: Remains Unchanged
        ❗ Action Required: Immediate investigation needed
        """
      )
    }
  }
  
}

  
    
  



