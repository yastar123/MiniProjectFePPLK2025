import axios from "axios";

const NewsApi = axios.create({
    baseURL: "https://newsapi.org/v2/",
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        apiKey: "d10d59d55ef2425eb21f521ab4b1c5e3",
    },
});

export const getNews = async () => {
    try {
        const response = await NewsApi.get("everything", {
            params: {
                q: "tesla",
                from: "2025-06-02",
                sortBy: "publishedAt",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching Tesla news:", error);
        return { articles: [] };
    }
};

export default NewsApi;
