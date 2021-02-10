import React,{Component} from 'react'
import './App.css';
import {YoutubeDataAPI} from 'youtube-v3-api'

class App extends Component{
  constructor(){
    super()
    this.state={
      API_KEY:'AIzaSyDx4hKw7GYUajee_cZzcpuId8V8FvnKizI',
      searchInput: ""
    }
  }

  handleClick=()=>{
    const api = new YoutubeDataAPI(this.state.API_KEY);
    api.searchAll(this.state.searchInput,25).then((data) => {
        console.log(data);
    },(err) => {
        console.error(err);
    })
  }

  handleChangeInput=(e)=>{
    const {name,value} = e.target
    this.setState({
      [name]:value
    })
  }

  render(){
    return (
      <div className="App">
        <input 
          type="text"
          value={this.state.searchInput}
          name="searchInput"
          placeholder="Buscar"
          onChange={this.handleChangeInput}
        />
        <button onClick={this.handleClick}>Buscar</button>
      </div>
    );
  }
}

export default App;
