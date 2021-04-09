import React from 'react'
import News from './News'

function NewsList({data}) {
  const news = data.articles.map((article) => (
    <div className="col my-3" key={article.url} >
      <News urlToImage={article.urlToImage} title= {article.title} description={article.description} published={article.publishedAt} sourceName={article.source.name} url={article.url} id={Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))} />
  </div>
   ))
  return (
    news
  )
}

export default NewsList
