import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactHover from '..';

class App extends Component {

  render() {
    return (
      <ReactHover>
        <div> 
          <h1> pop up header </h1>
          <p> pop up content </p>
        </div>
      </ReactHover>
    );
  }
}


const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
  