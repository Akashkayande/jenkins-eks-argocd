const express = require("express");
const client = require("prom-client");

const app = express();
const PORT = process.env.PORT || 5000;


const register = new client.Registry();



// HTTP request counter
const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP requests",
  labelNames: ["method", "route", "status_code"],
  registers: [register],
});



// Middleware
app.use((req, res, next) => {
  const route = req.route?.path || req.path;

  const endTimer = httpRequestDurationSeconds.startTimer({
    method: req.method,
    route,
  });

  res.on("finish", () => {
    httpRequestsTotal.inc({
      method: req.method,
      route,
      status_code: res.statusCode,
    });

    endTimer({ status_code: res.statusCode });
  });

  next();
});

// Metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});
