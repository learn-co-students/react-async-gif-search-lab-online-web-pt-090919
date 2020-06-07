import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

    state = {
        gifSet: []
    }

    setSearchQuery = (sQ) => {
        const search = `https://api.giphy.com/v1/gifs/search?q=${sQ}&api_key=${this.props.apiKey}&rating=g`
        fetch(search)
        .then(response => response.json())
        .then(data => {this.setState({gifSet: Array.from(data.data)})})
    }



    render() {
        return (
            <div>
                < GifSearch setSearchQuery={this.setSearchQuery} />
                < GifList gifSet={this.state.gifSet} />
            </div>
        )
    }

}

// `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${apiKey}&rating=g`