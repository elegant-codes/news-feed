import React, { useState } from 'react'
import './Homepage.css'
import {Data} from './data'
import NewsList from './NewsList'

function Homepage() {
  const [data, setData] = useState(Data);
  return (
    <>
    <div className="container mt-5" >
      <h1 className="text-center m-4">Latest Update</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
       <NewsList data={data} />
      </div>
    </div>
  </>
  )
}

export default Homepage
