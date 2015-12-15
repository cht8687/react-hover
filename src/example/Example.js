import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactHover from '..';
import HoverComponent from './HoverComponent';
import TriggerComponent from './TriggerComponent';

class App extends Component {

  render() {

    return (
      <div>
        <ReactHover>
          <TriggerComponent />
          <HoverComponent />
        </ReactHover>
      </div>
    );
  }

}

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
  