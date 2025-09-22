import React from "react";
import { ArticleHome } from "./ArticleHome";
import EVPopup from "../popup/page";
const Article = ({ data }) => {
  return (
    <div>
      <ArticleHome data={data} />
      <EVPopup data={data} />
    </div>
  );
};

export default Article;
