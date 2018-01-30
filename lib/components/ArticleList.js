import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
  console.log(props.articles);
  return (
    <div>
      {Object.values(props.articles).map((article, i) => (
        <Article
          key={i}
          article={article}
          actions={props.articleActions}
        />
      ))}
    </div>
  );
};

export default ArticleList;
