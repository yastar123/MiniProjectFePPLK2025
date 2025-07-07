import axios from "axios";

const NewsApi = axios.create({
    baseURL: "https://newsapi.org/v2/",
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        apiKey: "83ba9a81f286409ea3c7c53b8e022981",
    },
});

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = import.meta.env.VITE_API_URL || "https://miniprojectfepplk2025.onrender.com";

export const getNews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/news`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Tesla news:", error);
    return { articles: [] };
  }
};

export default NewsApi;
