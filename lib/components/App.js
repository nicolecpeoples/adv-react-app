import React from 'react';

import ArticleList from './ArticleList';
import DataAPI from '../DataAPI';
import { data } from '../testData.json';

const api = new DataAPI(data);

class App extends React.Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  }
  // look up author
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}
export default App;
