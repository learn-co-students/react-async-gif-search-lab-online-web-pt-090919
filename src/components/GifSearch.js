import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    query: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Enter a Search Term:</h4>
          <input
            type='text'
            value={this.state.query}
            onChange={event => this.setState({query: event.target.value})}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
