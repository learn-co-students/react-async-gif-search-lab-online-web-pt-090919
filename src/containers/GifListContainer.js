import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			gifs: []
		}

		this.submitHandler = this.submitHandler.bind(this)
		this.fetchGifs = this.fetchGifs.bind(this)
	}
    // https://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=lhwuWkEIIj7TbNzZWmh8zswsopdlO7GG&rating=g
	fetchGifs(gifSearch) {
		let url = `https://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=lhwuWkEIIj7TbNzZWmh8zswsopdlO7GG&rating=g`
        fetch(url)
			.then(res => res.json())
            .then(data => 
				this.setState({ 
                    gifs: data.data
                })
				)
	}

	submitHandler(gifSearch) {
		this.fetchGifs(gifSearch)
	}

	render() {
		return (
			<div>
				<GifSearch submitCallBack={this.submitHandler} />
				<GifList gifs={this.state.gifs} />
			</div>
		)
	}
}