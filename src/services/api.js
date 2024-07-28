import axios from "axios"

const Base_url="http://127.0.0.1:8000/api/movies/"

export async function MovieListapi(){

    return await axios.get(Base_url) //axios return promises

}

export async function MovieCreateapi(data){

    let headers={'Content-Type':'multipart/form-data'}//for images/files

    return await axios.post(Base_url,data,{headers:headers})

}

export async function MovieDetailapi(id){

    return await axios.get(Base_url+`${id}/`)

}

export async function MovieUpdateapi(id,data){

    let headers={'Content-Type':'multipart/form-data'}//for images/files


    return await axios.put(Base_url+`${id}/`,data,{headers:headers})

}

export async function MovieDeleteapi(id){

    return await axios.delete(Base_url+`${id}/`)

}