import React from 'react'
import HyvorTalk from 'hyvor-talk-react'
import {Data} from './data'

const NewsDetails = ({match}) => {
  const news = Data.articles.find( n => n.publishedAt === match.params.id)
  console.log(news)
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col my-4">
        <h1 className="mt-4 news_head" >{news.title}</h1>
        <div className="mb-2">
          <img src={news.urlToImage} className="img-fluid" alt=""/>
        </div>
        <p className="news_content">{news.content ? news.content : news.description }</p>
        <a href={news.url} target="_blank" ><button type="button" class="btn btn-outline-dark"> Read More </button> </a>
        </div>
      </div>

     </div>
    

    <div class="container pb-cmnt-container my-5">
      
      <div class="row mb-5">
          <div class="col-md-6 col-md-offset-3">
              <div class="panel panel-info">
                  <div class="panel-body my-5">
                  <HyvorTalk.Embed websiteId={3757} />
                     
                  </div>
              </div>
          </div>
      </div>
  </div>

    </>
  )
}

export default NewsDetails
