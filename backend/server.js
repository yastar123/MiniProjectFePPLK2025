import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// ✅ Tambah ini untuk __dirname karena pakai ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static files dari folder dist (React build)
app.use(express.static(path.join(__dirname, "dist")));

// ✅ API endpoint
app.get("/api/news", async (req, res) => {
    try {
        if (!process.env.NEWS_API_KEY) {
            return res.status(500).json({ error: "NEWS_API_KEY is not set in environment variables." });
        }
        const response = await axios.get("https://newsapi.org/v2/everything", {
            params: {
                q: "tesla",
                apiKey: process.env.NEWS_API_KEY,
            },
        });
        console.log("NewsAPI response:", response.data);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching news:", error.message);
        if (error.response) {
            res.status(error.response.status).json({ error: error.response.data, status: error.response.status });
        } else {
            res.status(500).json({ error: "Failed to fetch news" });
        }
    }
});

// ✅ Health check (optional)
app.get("/api/", (req, res) => {
    res.json({ message: "API is running!" });
});

// ✅ Fallback route (biar React Router jalan)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
