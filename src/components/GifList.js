import React from 'react';

export default class GitList extends React.Component {
  
  render(){
    return (
      <div>
      <ul>
      {this.props.state.api.map(el => {
        <li>{el.data}</li>
      })}
      </ul>
      </div>
      )
  }
}