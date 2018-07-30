import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'

class SeasonOne extends React.Component {

  renderEpisode = ({ data }) => {
    let seasonOne = []
    for (let index = 0; index < data.length; index++) {
      if (data[index] != null && data[index].SeasonNumber === 1) {
        seasonOne.push(
          <div className="episode">
            <p key={data[index].ID}>{data[index].EpisodeNumber} {data[index].Title}</p>
          </div>
        )
      }
    }
    return seasonOne
  }

  render() {
    return (
      <div className="episode">
        <Fetch
          url="https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json"
          render={this.renderEpisode}
        >
        </Fetch>
      </div>
    )
  }
}

export default SeasonOne