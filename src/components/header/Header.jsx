import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'
import './header.css'

class Header extends React.Component {
  render() {
    return (
      <Fetch url="https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json">
        {({ data }) => 
        <div className="header">
          <h1 className="header__title">{data.Title}</h1>
          <p className="header__info">
            80% Indicado / {data.Genres[0].Title} {data.Genres[1].Title} / {data.Year} / EUA / 14
          </p>
        </div>
      }
      </Fetch>
    )
  }
}

export default Header
