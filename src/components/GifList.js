import React, { Component } from 'react'

export default class GifList extends Component {
    
    render() {
        return (
            <ul>
                {this.props.gifSet.map(gif => this.showGif(gif))}
            </ul>
        )
    }    

    showGif = (gif) => {
        return(
            <li>
                <img src={gif.url} alt={gif.title} />
            </li>
        )
    }

    // state = {
    //     searchQuery: ""
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         searchQuery: e.target.value
    //     })
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.setSearchQuery(this.state.searchQuery)
    // }

    // render() {
    //     return (
    //         <form
    //             className="navbar-form"
    //             onChange={e => this.handleChange(e)}
    //             onSubmit={e => this.handleSubmit(e)}
    //         >
    //             <input name="searchQuery" value={this.state.searchQuery} />
    //             <input type="submit" name="submit" value="Get Gifs" />
    //         </form>
    //     )
    // }

}