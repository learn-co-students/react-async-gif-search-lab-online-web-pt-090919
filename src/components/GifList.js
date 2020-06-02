import React, { Component } from 'react';

export default class GifList extends Component{ 
    constructor(props){
        super(props)
    } 
   
    makeLis =(obj)=>{ 
        
        return obj.map(gif =>{ 
            
            return ( 
                <ul>
                <div>
                <li><a href={`${gif.url}`}>{gif.title}</a></li>
                </div>
                </ul>
                )
        })
    }
    render(){ 
        
        return (<div><li>{this.makeLis(this.props.gifs)}</li></div> )
        }
}