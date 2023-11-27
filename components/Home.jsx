import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header.jsx";
import Article from "./Article";
import Nav from "./Nav";

export default function Home() {
  //////////////////////////////SEARCH

  ////////////////////////////////////////
  /////////////// DATA NEWS //////////////
  ////////////////////////////////////////

  const [articlesData, setArticlesData] = useState([]);
  const apiKeyNews = "58a09dd630d64eb9b3db1e60ce6554aa";

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKeyNews}`)
      .then((res) => res.json())
      .then((data) => {
        const formatedData = data.articles.map((article) => {
          return {
            title: article.title,
            author: article.author,
            description: article.description,
            content: article.content,
            originUrl: article.url,
            origin: article.source.name,
            image: article.urlToImage,
            time: article.publishedAt,
          };
        });
        setArticlesData(formatedData);
      });
  }, []);

  return (
    <div>
      <Header />
      <Nav />
      <div className={styles.article_container}>
        {articlesData.map((item, index) => (
          <Article key={index} {...item} articlesData={articlesData} />
        ))}
      </div>
    </div>
  );
}
