import React from "react";
import "../../styles/scss/Home.scss";

const NewsTile = ({ article }) => {
  const { urlToImage, url, title } = article;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <figure>
        <img src={urlToImage} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </a>
  );
};

export default NewsTile;
