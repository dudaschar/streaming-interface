import React from 'react'
import Background from '../../components/background/Background'
import Header from '../../components/header/Header'

import './moviePage.css'


const MoviePage = () => (
    <div className="movie-page">
      <Background />
      <div className="movie-page--content">
        <Header />
      </div>
    </div>
);

export default MoviePage