import React from 'react';

export default class GifList extends React.Component{

    render(){
        return(
            <div>
            {this.props.allGifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt="Image was Not Found"/></li>)}
            </div>
        )
    }
} 
// map(gif => <li key={gif.id}><img src={gif.images.original.url} alt=""/></li>)}