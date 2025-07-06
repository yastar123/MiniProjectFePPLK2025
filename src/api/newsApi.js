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
