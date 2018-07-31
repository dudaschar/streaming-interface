import React, { Component } from 'react'
import SeasonOne from '../../components/season/SeasonOne'
import SeasonTwo from '../../components/season/SeasonTwo'
import './episodeList.css'

class EpisodeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSeasonOne: true
    }
    this.handleClickOne = this.handleClickOne.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
  }

  handleClickOne() {
    this.setState({isSeasonOne: true})
  }

  handleClickTwo() {
    this.setState({isSeasonOne: false})
  }

  render() {
    const isSeasonOne = this.state.isSeasonOne
    let showContent
    let classOne
    let classTwo

    if (isSeasonOne) {
      showContent = <SeasonOne />
      classOne = "episode-list__header--active"
      classTwo = "episode-list__header--disable"
    } else {
      showContent = <SeasonTwo />
      classOne = "episode-list__header--disable"
      classTwo = "episode-list__header--active"
    }

    return (
      <div className="episode-list">
        <div className="episode-list__header">
          <div className={classOne}>
            <p onClick={this.handleClickOne}>T1</p>
          </div>
          <div className={classTwo}>
            <p onClick={this.handleClickTwo}>T2</p>
          </div>
        </div>
        <div className="episode-list__content">
          {showContent}
        </div>
      </div>
    )
  }
}

export default EpisodeList