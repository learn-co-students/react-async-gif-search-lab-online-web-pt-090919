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
                < GifSearch handleSubmit={this.handleSubmit}/>
                < GifList gifs={this.state.gifs} />
            </div>
        )
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
          .then(response => response.json())
          .then(data => {
            this.setState({
               gif: data.data
            })
          })
      }
}