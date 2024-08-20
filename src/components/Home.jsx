import React from 'react'
import Movies from './Movies'
import {api,api_key} from '../api'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {fetchMovies} from '../redux/action/Movies'
const Home = () => {

  const dispatch = useDispatch()


  const getMovies = async ()=>{
  const res = await api.get (`/movie/now_playing?api_key=${api_key}`)
  dispatch (fetchMovies (res.data.results))
  // console.log(res.data.results);
  }

  useEffect (()=>{
    getMovies()
  },[])
  return (
    <div>
      <Movies/>
    </div>
  )
}

export default Home
