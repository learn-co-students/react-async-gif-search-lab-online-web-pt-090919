import React from 'react';

export default class GifSearch extends React.Component {
  
  state = {
  search: ''
  }
  
  handleChange = event => {
    event.persist()
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  
  render(){
    return (
      <form onSubmit={this.props.handleSubmit}>
      <input type="text" id="search" value={this.state.search} onChange={this.handleChange}/>
      </form>
      )
  }
}