import express from "express";
import cors from "cors";

const app = express();

// basic configuration
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);
// import routes below
import healthCheckRouter from "./routes/healthcheck.routes.js";
/*
  INFO: meaning that anything which will come after "/api/v1/healthcheck"  will be sent to 'healthCheckRouter'
*/
app.use("/api/v1/healthcheck", healthCheckRouter);

app.get("/", (req, res) => {
  res.send("Welcome to base campy");
});

app.get("/instagram", (req, res) => {
  res.send("We are inside the instagram page");
});

export default app;
