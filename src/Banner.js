import axios from './axios';
import React, { useState,useEffect } from 'react'
import requests from './requests';
import './Banner.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(requests.fetchTrending)
      setMovie (
        request.data.results[
          (Math.floor(Math.random() * request.data.results.length))
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate (str, n) {
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
  }

  return (
    <header className='banner' 
    style={{backgroundImage: `url(${base_url}${movie?.backdrop_path})`}}>
      <div className='banner__content'>
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div>
          <button className='banner__button' >Play</button>
          <button className='banner__button' >More Info</button>
        </div>
        <h3 className='banner__description'>
          {truncate(movie?.overview, 150)}</h3>
      </div>
      <div className='banner__fadebottom' />
    </header>
  )
}

export default Banner;