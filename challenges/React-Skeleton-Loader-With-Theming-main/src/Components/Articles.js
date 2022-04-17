import React, { useState, useEffect } from "react";
import ArticleSkeleton from "../Skeleton/ArticleSkeleton";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  async function fetchData() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const respData = await resp.json();
    setArticles(respData);
  }

  useEffect(() => {
    // delay fetch of data so we can see skeleton
    setTimeout(() => {
      fetchData();
    }, 8000);
  }, []);

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((post) => {
          return (
            <div className="article" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}

      {!articles &&
        [1, 2, 3, 4, 5].map((id) => {
          return <ArticleSkeleton key={id} />;
        })}
    </div>
  );
};

export default Articles;
