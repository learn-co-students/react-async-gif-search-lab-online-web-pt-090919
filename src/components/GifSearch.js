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
          <label>
            Enter a Search Term:
            <input
              type='text'
              value={this.state.query}
              onChange={event => this.setState({query: event.target.value})}
            />
          </label>
          <input type="submit" value="Find GIFs"/>
        </form>
      </div>
    )
  }
}
