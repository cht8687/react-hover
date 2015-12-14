import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactHover from '..';
import * as style from './css';

class App extends Component {

  render() {

    const refName = "hover1";

    return (
      <div>
        <h1 
          style={style.hoverItem} 
          onMouseOver={this.onMouseOver.bind(this, refName)}> 
            hover me 
        </h1>
        <ReactHover
          ref={refName}
        >
        /******* Object in pop up *****/
          <div style={style.outerDiv}> 
            <h1> pop up header </h1>
            <p> pop up content </p>
          </div>
        /******************************/
        </ReactHover>
      </div>
    );
  }

  onMouseOver(ref) {
    const refDom = eval(`this.refs.${ref}`);
    // refDom.props.children.props.style.background = 'blue';

  }
}

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
  