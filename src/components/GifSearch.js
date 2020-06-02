import React, { Component } from 'react';

export default class GifSearch extends Component{
    constructor(props){
        super(props) 
        
        this.BASEURL = `https://api.giphy.com/v1/gifs/search?q=`
        this.ADDSEARCH = `&api_key=06INlv9fQ2vx1okgJMzAHXk7fpMQLPOB&rating=g` 
                                   
    }  

    handleSubmit =(e)=>{
        e.preventDefault(); 
        debugger
        fetch(this.BASEURL + e.target.value + this.ADDSEARCH) 
        .then(res => res.json()) 
        .then(data => console.log(data)) 
        .catch(err => alert(err)) 
    }
    handleChange=(e)=>{
        this.setState({title: e.target.value,
                        search: e.target.value
                        }); 
        let FETCHURL = this.BASEURL+ this.state.title + this.ADDSEARCH
        fetch(FETCHURL) 
        .then(res =>res.json()) 
        .then(data => console.log(data))
    }
    render(){
        return(
        <div> 
            <p>{this.props.search}</p>
        <form onSubmit={(e) => this.props.submit(e)}>
            <input type="text" onChange={(e) => this.props.searchIt(e)} value={this.props.search} />
            <input type="submit" value="submit"/>
        </form>
        </div>)
    }
}