import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { SliderMovies } from '../components/SliderMovies/SliderMovies'
import { URL_API } from '../utils/constants'
import { API_KEY } from '../utils/constants'


export const Home = () => {

const newNmovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)


  return (
    <><SliderMovies movies={newNmovies}/></>
  )
}
