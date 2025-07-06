import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 3001;

app.use(cors());

console.log("Loaded NEWS_API_KEY:", process.env.API_KEY);

app.get("/api/news", async (req, res) => {
  try {
    if (!process.env.API_KEY) {
      return res.status(500).json({ error: "NEWS_API_KEY is not set in environment variables." });
    }
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "tesla",
        from: "2025-06-04",
        sortBy: "publishedAt",
        apiKey: process.env.API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: "Failed to fetch news" });
    }
  }
});

app.get("/api/", (req, res) => {
  res.json({ message: "API is running!" });
});

app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
