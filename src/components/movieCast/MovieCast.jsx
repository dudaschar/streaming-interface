import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'
import Fade from 'react-reveal/Fade';

import Spinner from '../spinner/Spinner'
import './movieCast.css'

class MovieCast extends React.Component {

  renderCast = ({data}) => {
    let contentCast = []
    for (let index = 0; index < data.Cast.length; index++) {
      contentCast.push(<Fade left> 
        <div className="movie-cast__box">
          <p key={data.Cast[index].ID} className="movie-cast__actor">{data.Cast[index].Name}</p>
        </div> </Fade>
      )
    }
    return contentCast
  }
render() {
  return (
    <div className="movie-cast">
      <Fetch
        url="https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json"
        render={this.renderCast}
        loader={<Spinner />}
      >
      </Fetch>
    </div>
    )
  }
}

export default MovieCast