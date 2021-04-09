import React from 'react'
import {Link} from 'react-router-dom'

function News({urlToImage, title,  description, published, sourceName, id}) {
  return (
    <>
      <Link to={`/news/${published}`}>
      <div className="card h-100 news">
      {urlToImage ? <img src={urlToImage} className="card-img-top" alt=""/> : ''}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description} </p>
        <p className="card-text">
          <small className="text-muted">
          {`${published}  ${sourceName}`} 
          </small>
        </p>
      </div>
      </div>
      </Link>
    </>
  )
}

export default News
