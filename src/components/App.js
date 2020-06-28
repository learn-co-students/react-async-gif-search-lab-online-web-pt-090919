import React from 'react'


import React from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component

const App = () => {
return (
  <div className="full-width-container">
    <div>
        <NavBar color='black' title="Giphy Search" />
    </div>
    <GifListContainer />
  </div>
)
}

export default App
