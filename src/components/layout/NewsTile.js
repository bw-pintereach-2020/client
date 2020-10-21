import React from "react";
import "../../styles/scss/Home.scss";

const NewsTile = ({ article }) => {
  const { urlToImage, url, title } = article;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <figure className='article-thumbnail'>
        <img src={urlToImage ? urlToImage : 'https://www.battea.com/wp-content/uploads/2018/09/icon-research.png'} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </a>
  );
};

export default NewsTile;
