import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'
import './movieInfos.css'
import TelecineLogo from './img/telecine-logo.png'

class MovieInfos extends React.Component {
  render() {
    return (
      <div className="movie-infos">
        <div className="movie-infos__header">
          <div className="movie-infos__tabs">
            <div className="movie-infos__general">
              <p>Geral</p>
            </div>
            <div className="movie-infos__cast">
              <p>Elenco</p>
            </div>
            <div className="movie-infos__awards">
              <p>Prêmios Principais</p>
            </div>
          </div>
          <div className="movie-infos__logo">
            <img src={TelecineLogo} alt="Telecine"/>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieInfos