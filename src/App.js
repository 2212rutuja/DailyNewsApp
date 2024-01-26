
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  HashRouter,//BrouserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <HashRouter >
          <Navbar />
          <LoadingBar
          height={4} 
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}     key='general' pageSize={12} country='us' category='general' headline="General News" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress}    key="business" pageSize={6} country="in" category="business" headline="Business News" />}> </Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}    key="entertainment" pageSize={6} country="in" category="entertainment" headline="Entertainment News" />}> </Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress}    key="general" pageSize={6} country="in" category="general" headline="General News" />} ></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress}    key="health" pageSize={6} country="in" category="health" headline="Health News" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress}    key="science" pageSize={6} country="in" category="science" headline="Science News" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress}    key="sports" pageSize={6} country="in" category="sports" headline="Sports News" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress}    key="technology" pageSize={6} country="in" category="technology" headline="Technology News" />}></Route>

          </Routes>
        </HashRouter>

      </div>
    )
  }
}




