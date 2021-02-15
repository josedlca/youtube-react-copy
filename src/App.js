import React,{Component} from 'react'
import './App.css';
import {YoutubeDataAPI} from 'youtube-v3-api'
import Header from './components/Header'
import MainPage from './MainPage'
import VideoPlayer from './VideoPlayer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component{
  constructor(){
    super()
    this.state={
      API_KEY:'AIzaSyDx4hKw7GYUajee_cZzcpuId8V8FvnKizI',
      searchInput: "",
      loading:true,
      youData: {}
    }
  }

  componentDidMount(){
    const api = new YoutubeDataAPI(this.state.API_KEY);
    api.searchAll("news",25).then((data) => {
        this.setState({
          loading: false,
          youData:data
        });
    },(err) => {
        console.error(err);
    })
  }

  handleClick=()=>{
    const api = new YoutubeDataAPI(this.state.API_KEY);
    api.searchAll(this.state.searchInput,25).then((data) => {
        this.setState({
          youData:data
        });
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
      <Router>
        <div className="App">
          <Header
            handleChangeInput={this.handleChangeInput}
            handleClick={this.handleClick}
            {...this.state}
          />
          <Route path='/' exact>
            <MainPage
              {...this.state}
            />
          </Route>
          <Route path='/videoPlayer/:id' component={VideoPlayer}/>
        </div>
      </Router>
    );
  }
}

export default App;
