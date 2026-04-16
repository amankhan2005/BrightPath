import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

// ✅ CORS (clean)
app.use(cors({
  origin: [
    "https://bpautism.netlify.app",
    "https://bpautism.com",
    "https://www.bpautism.com",
    "http://localhost:5173"
   
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// ✅ Routes
app.use("/api/contact", contactRoutes);
app.use("/api/careers", careerRoutes);

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// ✅ Error handler
app.use(errorHandler);

export default app;