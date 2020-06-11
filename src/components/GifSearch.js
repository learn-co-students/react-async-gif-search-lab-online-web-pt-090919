import React from 'react';


export default class GifSearch extends React.Component{

    state = {
        search: ""
    }

    handleChange = (event) => {
        event.persist()
        this.setState({
            [event.target.id]: event.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGIFs(this.state.search)
    }

    render() {

        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                <input 
                type="text" 
                id="search" 
                value={this.state.search} 
                onChange={this.handleChange}></input>
                <input type="submit"></input>
            </form>
        )
    }
} 