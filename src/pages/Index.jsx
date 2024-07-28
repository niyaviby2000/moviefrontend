import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MovieCreate from '../components/MovieCreate'
import MovieSummary from '../components/MovieSummary'

function Index() {

  const [refreshrequired,setRefreshrequired]=useState()

  const [movieId,setMovieid]=useState()
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <MovieCreate setRefreshrequired={setRefreshrequired} movieId={movieId}></MovieCreate>
      <MovieSummary refreshrequired={refreshrequired} setMovieid={setMovieid}></MovieSummary>
    </div>
  )
}

export default Index
