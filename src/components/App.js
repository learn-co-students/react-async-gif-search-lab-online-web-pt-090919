import React from 'react'
import GifListContainer from '../containers/GifListContainer'
// import GifSearch from './GifSearch'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {

  const apiKey = `FV5ylzEPlljunXiA3vjNj1MLpMiDAZjO`

  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainer apiKey={apiKey} />
    </div>
  )
}

export default App
