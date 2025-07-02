import React from "react";
import DetailComponent from "../component/Detail/Detail";
import ArticleDetail from "../component/artikelDetail/article-detail";
import Sidebar from "../component/Sidebar/Sidebar";

const Detail = () => {
  return (
    <div>
      <ArticleDetail />
      <Sidebar />
      <DetailComponent />
    </div>
  );
};

export default Detail;
