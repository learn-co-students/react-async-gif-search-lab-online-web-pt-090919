import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    return (
      <ul>
        {this.props.gifs.map((gif) => (
          <li key={gif.id}>
            <img src={gif.url} alt="" />
          </li>
        ))}
      </ul>
    );
  }
}
