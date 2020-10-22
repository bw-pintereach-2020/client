import React from "react";

const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

const NewsTile = ({ article }) => {
  const { urlToImage, url, title } = article;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <figure className='article-thumbnail'>
        <img src={urlToImage ? urlToImage : 'https://image.shutterstock.com/image-vector/business-analysis-icon-vector-illustrationmarketing-260nw-1685388379.jpg'} alt={title} />
        <figcaption>{truncate(title, 40, '...')}</figcaption>
      </figure>
    </a>
  );
};

export default NewsTile;
