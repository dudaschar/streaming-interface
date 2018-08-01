import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import './episodeClose.css'

const EpisodeClose = ({ episode, title }) => (
  <div className="episode-close">
    <p className="episode-close__title">
      <span className="episode-close__number">
        {episode}
      </span>
      {title}
    </p>
    <FontAwesomeIcon className="episode-close__icon" icon={faPlayCircle} />
  </div>
)

EpisodeClose.propTypes = {
  episode: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default EpisodeClose