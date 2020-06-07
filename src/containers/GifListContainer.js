import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GiftListContainer extends Component {
  state = {
    gifs: []
  }

  fetchGIFs = (query='dolphins') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=jVR2wHIKKVldp9eWruydx9x8hZAUPkt4&rating=g`)
      .then(resp => resp.json())
      .then(gifsData => {
        // extract urls of first 3 gifs and save in state (gifs array)
        if (gifsData.hasOwnProperty('data')){
          this.setState({gifs: gifsData.data.slice(0,3).map(gif => gif.images.original.url)})
        } else {
          this.setState({gifs: []})
        }
        console.log(this.state.gifs)
      })
  }

  render() {
    return (
      <div>
        < GifSearch fetchGIFs={this.fetchGIFs} />
        < GifList gifs={this.state.gifs} />
      </div>
    )
  }

  componentDidMount() {
    this.fetchGIFs()
  }
}

export default GiftListContainer
