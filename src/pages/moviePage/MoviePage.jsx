import React, { Component } from 'react'
import Background from '../../components/background/Background'
import Header from '../../components/header/Header'
import MovieInfos from '../../components/movieInfos/MovieInfos'
import EpisodeList from '../../components/episodeList/EpisodeList'
import './moviePage.css'

const MoviePage = () => (
    <div className="movie-page">
      <Background />
      <div className="movie-page__content">
        <Header />
        <div className="movie-page__mobile">
          <EpisodeList />
          <MovieInfos />
        </div>
      </div>
    </div>
);

export default MoviePage