import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'
import Episode from '../episode/Episode'
import Spinner from '../spinner/Spinner'

class SeasonTwo extends React.Component {

  renderEpisode = ({ data }) => {
    let seasonOne = []
    for (let index = 0; index < data.length; index++) {
      if (data[index] != null && data[index].SeasonNumber === 2) {
        seasonOne.push(
          <Episode
            key={data[index].ID}
            episode={data[index].EpisodeNumber}
            title={data[index].Title}
            image={data[index].Image}
            synopsis={data[index].Synopsis}
          />
        )
      }
    }
    return seasonOne
  }

  render() {
    return (
      <Fetch
        url="https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json"
        render={this.renderEpisode}
        loader={<Spinner />}
      >
      </Fetch>
    )
  }
}

export default SeasonTwo