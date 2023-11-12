
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  

  
  constructor(){
    super();

    console.log(process.env.REACT_APP_NEWS_API);
    
    this.apiKey = process.env.REACT_APP_NEWS_API
    
    this.state={
      progress:0
    }
  }

  setProgress=(progress)=>{
    this.setState({progress:progress});
  }

  render() {
    console.log("Api Key"+process.env.REACT_APP_NEWS_API);
    return (
      <>

        <BrowserRouter>
          <LoadingBar

            height={3}
            color='#f11946'
            progress={this.state.progress}

          />
          <Navbar />
          <Routes>
            <Route exact path="/"  element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="general" pageSize={30} category="general" />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="entertainment" pageSize={30} category="entertainment" />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="health" pageSize={30} category="health" />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="sports" pageSize={30} category="sports" />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress = {this.setProgress} key="science" pageSize={30} category="science" />} />
          </Routes>
        </BrowserRouter>


      </>
    );
  }

}

export default App;
