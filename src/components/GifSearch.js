import React, { Component } from 'react';

class GifSearch extends Component {
     constructor(props) {
          super(props)
          this.state = {
               query: ""
          }
     }

     handleOnChange = (e) => {
          this.setState({
               query: e.target.value
          })
     }

     render() {
          return (
               <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                         <label>Enter a search term:</label>
                         <input onChange={this.handleOnChange} type="search" />
                         <button type="submit">Submit</button>
                    </div>
               </form>
          );
     }
}

export default GifSearch;
