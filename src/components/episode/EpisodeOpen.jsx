import React from 'react'
import PropTypes from 'prop-types'
import Image from 'react-image-webp'
import ImageDefault from './img/penny-dreadful.jpg'
import './episodeOpen.css'

const EpisodeOpen = ({ image, title, synopsis }) => (
  <div className="episode-open">
    <Image
      src={ImageDefault}
      webp={image}
      className="episode-open__image"
    />
    <p className="episode-open__text">{synopsis}</p>
  </div>
)

EpisodeOpen.propType = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
}

export default EpisodeOpen