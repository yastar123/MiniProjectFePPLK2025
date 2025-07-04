import axios from "axios";

const NewsApi = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apiKey: "cd2216e3a3894740a58f9877892d8081",
  },
});

export const getNews = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/news");
    return response.data;
  } catch (error) {
    console.error("Error fetching Tesla news:", error);
    return { articles: [] };
  }
};

export default NewsApi;
