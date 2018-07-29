import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import MoviePage from './pages/moviePage/MoviePage'
import registerServiceWorker from './registerServiceWorker'
import './utils/fonts.css'

ReactDOM.render(<MoviePage />, document.getElementById('root'));
registerServiceWorker();
