import React, { Component } from 'react';

class GifList extends Component {
     
     render() {
          const imagesList = this.props.firstThreeGifs.map((gifData, index) => {
               return (
                    <li key={index}>
                         <img src={gifData.images.original.url} alt={`Gif ${index}`}/>
                    </li>
               )
          })

          return (
               <ul>
                    {imagesList}
               </ul>
          );
     }
}

export default GifList;