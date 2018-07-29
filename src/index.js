import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MoviePage from './pages/moviePage/MoviePage'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<MoviePage />, document.getElementById('root'));
registerServiceWorker();
