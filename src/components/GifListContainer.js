import React, {Component} from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'


export default class GifListContainer extends Component {
    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                < GifSearch searchGifs={this.fetchGIFs}/>
                < GifList allGifs={this.state.gifs} />
            </div>
        )
    }

    fetchGIFs = (search) => {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
          .then(response => response.json())
          .then(data => {
            this.setState({
               gifs: data.data.slice(0,3)        
            })
            console.log(this.state.gifs)
          })
      }

      componentDidMount() {
        this.fetchGIFs()
      }
}