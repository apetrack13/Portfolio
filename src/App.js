import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'
import Timeline from './components/workExperience'
import Education from "./components/education";
import Projects from "./components/projects";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<About></About>
                    <Education></Education>
					<Timeline></Timeline>
                    <Projects></Projects>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
