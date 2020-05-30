import React from 'react';
import GiftList from './components/GiftList'
import GifSearch from './components/GifSearch'

export default class GiftListContainer extends React.Component {
  this.state = {
    api: []
  }
  
  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=mIuSfstFtNcWfvBo9cjiaDeIf6YltBOU&rating=g')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        api: data
      })
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=mIuSfstFtNcWfvBo9cjiaDeIf6YltBOU&rating=g', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      }
      body: JSON.stringify(this.state)
    })
  }
  
  render(){
    return(
      <GiftList data={this.state.api}/>
      <GifSearch {this.handleSubmit}/>
      )
  }
}