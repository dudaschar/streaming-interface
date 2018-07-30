import React, { Component } from 'react'
import { Fetch } from 'react-data-fetching'

class MovieCast extends React.Component {
    render() {
        return (
            <Fetch url="https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json">
                {({ data }) =>
                    <div className="movie-cast">
                        <p>Content Cast</p>
                    </div>
                }
            </Fetch>
        )
    }
}

export default MovieCast