import React from "react";
import { Container } from "../../../../components/Container/Container";

import mockData from "../../../../mock/mockData.json";
import Card from "../../../Card/Card";
import NotFound from "../NotFound/NotFound";
const CardContainer = () => {
  const allCards = () => {
    if (mockData.articles.length === 0) return <NotFound />;
    return mockData.articles.map((article) => {
      return (
        <Card
          key={article.title}
          publishedAt={article.publishedAt}
          source={
            article.source.id
              ? article.source
              : { name: article.source.name, id: "" }
          }
          author={article.author || ""}
          content={article.content}
          url={article.url}
          urlToImage={article.urlToImage}
          description={article.description}
          title={article.title}
        />
      );
    });
  };
  return (
    <Container className="flex column cardContainer">{allCards()}</Container>
  );
};

export default CardContainer;
