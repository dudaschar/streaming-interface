import React from 'react'
import PropTypes from 'prop-types'
import './episodeOpen.css'

const EpisodeOpen = ({ image, title, synopsis }) => (
  <div className="episode-open">
    <img className="episode-open__image" src={image} alt={title}/>
    <p className="episode-open__text">{synopsis}</p>
  </div>
)

EpisodeOpen.propType = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
}

export default EpisodeOpen