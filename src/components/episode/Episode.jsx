import React, { Component } from 'react'
import EpisodeOpen from '../episode/EpisodeOpen'
import EpisodeClose from '../episode/EpisodeClose'
import Fade from 'react-reveal/Fade'

class Episode extends React.Component {
  constructor() {
    super()
    this.state = {isOpen: false}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({isOpen: !prevState.isOpen}))
  }

  render() {
    const isOpen = this.state.isOpen
    let showContent

    if (isOpen) {
      showContent = <EpisodeOpen
          image={this.props.image}
          title={this.props.title}
          synopsis={this.props.synopsis}
      /> 
    }

    return (
      <div onClick={this.handleClick} className="episode">
        <Fade bottom>
          <EpisodeClose key={this.props.key}
            episode={this.props.episode}
            title={this.props.title}
          />
        </Fade>
        <Fade left opposite when={this.state.isOpen}>
        {showContent}
        </Fade >
      </div>
    )
  }
}

export default Episode