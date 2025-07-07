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

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const getNews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/news`);
    console.log("data API full", response.data);

    if (!response.data || !response.data.articles) {
      console.error("API returned invalid data:", response.data);
      return { articles: [] };
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching Tesla news:", error);
    return { articles: [] };
  }
};