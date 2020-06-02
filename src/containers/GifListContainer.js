import React, { Component } from 'react' 
import GifList from '../components/GifList'; 
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component{
    constructor(props){ 
        super(props)
        this.state = { gifs: [],  
                       search: ''
                        }                                          
        this.url = 'https://api.giphy.com/v1/gifs/search?q=dog&api_key=06INlv9fQ2vx1okgJMzAHXk7fpMQLPOB&rating=g'
        this.preURL = 'https://api.giphy.com/v1/gifs/search?q='
        this.BASE = 'https://api.giphy.com/v1/gifs/search?q=' 
        
        this.ADDSEARCH = '&api_key=06INlv9fQ2vx1okgJMzAHXk7fpMQLPOB&rating=g'

    }
    componentDidMount = () =>{ 
        fetch(this.url) 
        .then(res => res.json()) 
        .then(data =>{ 
        this.setState( (preState) => {
         return { gifs : data.data } }
        )  
        }) 
        .catch(err => alert(err)) 
        console.log(this.state.gifs)
        
    }  
    checkIt = (e) =>{
        e.preventDefault()
        this.setState({search: e.target.value}); 
        console.log("this is state.serrch", this.state.search) 
        fetch(this.BASE + this.state.search + this.ADDSEARCH) 
        .then(res => res.json()) 
        .then(data=>{ this.setState({gifs: data.data})}) 
        .catch(err => alert(err)) 
    }
    handleSubmit = (e) =>{
        e.preventDefault() 
        fetch(this.BASE + this.state.search + this.ADDSEARCH)
        .then(res => res.json()) 
            .then(data => {
                this.setState((preState) => {
                    return { gifs: data.data }
                }
                )
            }) 
    }
    render(){
        return(
            <div> 
                < GifSearch searchIt={this.checkIt} search={this.state.search} submit={(e) => this.handleSubmit(e)}/>
            <GifList gifs={this.state.gifs} />
            </div>)

    }
}