import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'
import Background from '../../components/background/Background'
import Header from '../../components/header/Header'
import MovieInfos from '../../components/movieInfos/MovieInfos'
import './moviePage.css'

const MoviePage = () => (
    <div className="movie-page">
      <Background />
      <div className="movie-page--content">
        <Header />
        <MovieInfos />
      </div>
    </div>
);

export default MoviePage