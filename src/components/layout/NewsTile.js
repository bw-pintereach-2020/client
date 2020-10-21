import React from "react";
import "../../styles/scss/Home.scss";

const NewsTile = ({ article }) => {
  const { urlToImage, url, title } = article;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <figure className='article-thumbnail'>
        <img src={urlToImage ? urlToImage : 'https://image.shutterstock.com/image-vector/business-analysis-icon-vector-illustrationmarketing-260nw-1685388379.jpg'} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </a>
  );
};

export default NewsTile;
