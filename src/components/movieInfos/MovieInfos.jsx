import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'
import MovieGeneral from '../movieGeneral/MovieGeneral'
import MovieCast from '../movieCast/MovieCast'

import './movieInfos.css'
import TelecineLogo from './img/telecine-logo.png'


class MovieInfos extends React.Component {
  constructor(props) {
    super(props)
    this.handleGeneralClick = this.handleGeneralClick.bind(this)
    this.handleCastClick = this.handleCastClick.bind(this)
    this.state = {isShowGeneral: true}
  }

  handleGeneralClick() {
    this.setState({isShowGeneral: true})
  }

  handleCastClick() {
    this.setState({isShowGeneral: false})
  }

  render() {
    const isShowGeneral = this.state.isShowGeneral
    let showContent
    let classGeneral
    let classCast

    if (isShowGeneral) {
      showContent = <MovieGeneral />
      classGeneral = "movie-infos__tabs--active"
      classCast = "movie-infos__tabs--disable"
    } else {
      showContent = <MovieCast />
      classGeneral = "movie-infos__tabs--disable"
      classCast = "movie-infos__tabs--active"
    }

    return (
      <div className="movie-infos">
        <div className="movie-infos__header">
            <div className={classGeneral}>
              <p onClick={this.handleGeneralClick}>Geral</p>
            </div>
            <div className={classCast}>
              <p onClick={this.handleCastClick}>Elenco</p>
            </div>
            <div className="movie-infos__tabs--awards">
              <p>Prêmios Principais</p>
            </div>
            <div className="movie-infos__logo">
              <img src={TelecineLogo} alt="Telecine" />
            </div>
          </div>
          
        {showContent}
      </div>
    )
  }
}

export default MovieInfos