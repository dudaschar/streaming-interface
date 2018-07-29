import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'
import './background.css'

class Background extends React.Component {
  render() {
    return (
      <Fetch url="https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json">
        {({ data }) =>
          <div className="background">
            <img
            className="background__image"
            src={data.Images.Background}
            alt={data.Title}
          />
          </div>
        }
      </Fetch>
    )
  }
}

export default Background