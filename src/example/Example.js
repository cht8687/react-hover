import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactHover from '..';
import * as styles from './css';
import componentHtml from './componentHtml';


class App extends Component {

  render() {

    return (
      <div>
        <ReactHover
         styles={styles}
         componentHtml={componentHtml}
        />
      </div>
    );
  }

}

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
  