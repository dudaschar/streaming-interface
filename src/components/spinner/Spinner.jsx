import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './spinner.css'

const Spinner = () => (
  <div className="spinner">
    <FontAwesomeIcon
      icon={faSpinner}
      spin
      className="spinner__icon"
    />
  </div>
)

export default Spinner