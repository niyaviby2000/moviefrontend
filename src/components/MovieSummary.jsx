import React, { useEffect, useState } from 'react'
import { MovieDeleteapi, MovieListapi } from '../services/api'

function MovieSummary({refreshrequired,setMovieid}) {

  const [movies,setMovies]=useState()

  async function handleMoviedelete(id){

    let res=await MovieDeleteapi(id)

    if(res.status>199 && res.status<300){

      fetchMovies()//if status is success call again fetchmovies to lists the movies

    }

  }

  async function fetchMovies(){

    let res=await MovieListapi() //it returns promise

    if (res.status>199 && res.status<300){

      setMovies(res.data)

    }

    else{

      console.log("failed to fetch data from resource");

    }

  }

  useEffect(()=>{

    fetchMovies()
  
  },[refreshrequired])

  return (
    <div>
      <h1 className='d-flex justify-content-center'>Movie List</h1>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8"></div>
          <table className='table table-info mt-3'>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Runtime</th>
              <th>Year</th>
              <th>Language</th>
              <th>Poster</th>
              <th>Action</th>
            </tr>
            <tbody>
              {movies && movies.map((m,i)=>(

                <tr>
                  <td>{m.title}</td>
                  <td>{m.director}</td>
                  <td>{m.runtime}</td>
                  <td>{m.year}</td>
                  <td>{m.language}</td>
                  <td><img style={{width:"70%",height:"200px"}} src={m.poster} alt="" /></td>
                  <td>
                    <button onClick={()=>handleMoviedelete(m.id)} className='btn btn-outline-dark'>Remove</button>
                    <button className='btn btn-outline-danger' onClick={()=>setMovieid(m.id)}>Update</button>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  )
}

export default MovieSummary
