import React from 'react'

export default class GifSearch extends React.Component {
    
    state = {
        searchQuery: ""
    }

    handleChange = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setSearchQuery(this.state.searchQuery)
    }

    render() {
        return (
            <form
                className="navbar-form"
                onChange={e => this.handleChange(e)}
                onSubmit={e => this.handleSubmit(e)}
            >
                <input name="searchQuery" value={this.state.searchQuery} />
                <input type="submit" name="submit" value="Get Gifs" />
            </form>
        )
    }

}