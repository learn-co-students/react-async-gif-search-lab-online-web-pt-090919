import React, { Component } from 'react'

export default class GifList extends Component {

  render() {
    return (
      <div>
        <ul>
          {(this.props.gifs.length > 0) ? (
            this.props.gifs.map(gif => <li><img src={gif} /></li>)
          ) : (
            <li>No gifs found.</li>
          )}
        </ul>
      </div>
    )
  }
}
