import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
     constructor(props) {
          super(props)
          this.state = {
               firstThreeGifs: []
          }
     }

     async componentDidMount() {
          const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=eminem
          &api_key=L63mxlGe0sZcgulBc2KmFvWC3qL3Y73V&rating=g`);
          const giphy = await res.json();
          this.setState({
               firstThreeGifs: giphy.data.length > 3 ? giphy.data.slice(0, 3) : [...giphy.data]
          })
     }

     handleSubmit = (e) => {
          e.preventDefault()
     }

     render() {
          return (
               <div>
                    <GifSearch handleSubmit={this.handleSubmit} />
                    <GifList firstThreeGifs={this.state.firstThreeGifs} />
               </div>
          );
     }
}

export default GifListContainer;