import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFrown, faVideo, faShare } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

import Spinner from '../spinner/Spinner'

import './movieGeneral.css'

class MovieGeneral extends React.Component {
  render() {
    return (
      <div className="movie-general">
        <Fetch
          url="https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json"
          loader={<Spinner />}
        >
        {({ data }) =>
          <div className="movie-general__content">
            <div className="movie-general__action">
              <div className="movie-general__button">
                <div>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
                <p>
                  Minha Lista
              </p>
              </div>
              <div className="movie-general__button">
                <div>
                  <FontAwesomeIcon icon={faFrown} />
                </div>
                <p>
                  Avaliar
                </p>
              </div>
              <div className="movie-general__button">
                <div>
                  <FontAwesomeIcon icon={faVideo} />
                </div>
                <p>
                  Gravar
                </p>
              </div>
              <div className="movie-general__button">
                <div>
                  <FontAwesomeIcon icon={faShare} />
                </div>
                <p>
                  Compartilhar
                </p>
              </div>
            </div>
            <Fade>
              <div className="movie-general__synopsis">
              <h4>Sinopse</h4>
              <p>{data.Synopsis}</p>
              </div>
            </Fade>
          </div>
          }
        </Fetch>
      </div>
    )
  }
}

export default MovieGeneral