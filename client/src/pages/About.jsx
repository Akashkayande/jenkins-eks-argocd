
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Briefcase, 
  Settings, 
  Download, 
  Zap, 
  CheckCircle, 
  Shield, 
  DollarSign 
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full  text-gray-700">
      <Navbar />

      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-30 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Empowering Your Creativity with AI
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Quick.ai helps you generate articles, ideas, images, and more with the power of AI — fast, simple, and smart.
        </p>
      </section>
      <section className="py-14 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-base max-w-3xl mx-auto">
          At Quick.ai, our mission is to make advanced AI tools accessible to everyone.
          Whether you’re a writer, designer, marketer, or student — we help you
          create, transform, and improve your work with ease.
        </p>
      </section>

      <section className="py-14 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What You Get
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white shadow p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Free Plan</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle size={18} color="#16a34a"/> Generate AI Articles</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} color="#16a34a"/> Create Blog Titles</li>
              <li className="flex items-center gap-2"><CheckCircle size={18} color="#16a34a"/> Basic Content Assistance</li>
            </ul>
          </div>
          <div className="bg-white shadow p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Zap size={18} color="#facc15"/> AI Image Generation</li>
              <li className="flex items-center gap-2"><Zap size={18} color="#facc15"/> Background Removal</li>
              <li className="flex items-center gap-2"><Zap size={18} color="#facc15"/> Resume Review</li>
              <li className="flex items-center gap-2"><Zap size={18} color="#facc15"/> Exclusive Advanced Tools</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-4">
            <User size={36} className="mx-auto mb-2 text-blue-500" />
            <h4 className="font-semibold">1. Sign Up</h4>
          </div>
          <div className="p-4">
            <Briefcase size={36} className="mx-auto mb-2 text-purple-500" />
            <h4 className="font-semibold">2. Choose Plan</h4>
          </div>
          <div className="p-4">
            <Settings size={36} className="mx-auto mb-2 text-orange-500" />
            <h4 className="font-semibold">3. Use AI Tools</h4>
          </div>
          <div className="p-4">
            <Download size={36} className="mx-auto mb-2 text-green-500" />
            <h4 className="font-semibold">4. Download/Share</h4>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Quick.ai?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          <div className="p-4">
            <Zap size={36} className="mx-auto mb-2 text-yellow-500" />
            <p>Fast & Reliable Tools</p>
          </div>
          <div className="p-4">
            <CheckCircle size={36} className="mx-auto mb-2 text-green-500" />
            <p>Simple & Clean UI</p>
          </div>
          <div className="p-4">
            <DollarSign size={36} className="mx-auto mb-2 text-teal-500" />
            <p>Affordable Plans</p>
          </div>
          <div className="p-4">
            <Shield size={36} className="mx-auto mb-2 text-red-500" />
            <p>Secure & Cloud-Based</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Start Creating with AI?
        </h2>
        <p className="mb-6">
          Join thousands of users unlocking creativity with Quick.ai today.
        </p>
        <button
          onClick={() => navigate("/ai")}
          className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default About;
