import React,{Component} from 'react'
import './App.css';
import {YoutubeDataAPI} from 'youtube-v3-api'

class App extends Component{
  constructor(){
    super()
    this.state={
      
    }
  }
  componentDidMount(){
    const API_KEY = 'AIzaSyDx4hKw7GYUajee_cZzcpuId8V8FvnKizI';
  
    const api = new YoutubeDataAPI(API_KEY);
    
    api.searchAll("Pandas",25).then((data) => {
        console.log(data);
    },(err) => {
        console.error(err);
    })
  }
  render(){
    return (
      <div className="App">
        Hello Youtube
      </div>
    );
  }
}

export default App;
