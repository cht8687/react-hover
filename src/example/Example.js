import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactHover from '..';
import * as styles from './css';
import * as componentHtml from './componentHtml';


class App extends Component {

  render() {

    return (
      <div>

        <h3 style={{margin: '0 auto', textAlign: 'center'}}> Basic </h3>
        <ReactHover
         styles={styles.basic}
         componentHtml={componentHtml.basicComponentHtml}
        />

        <h3 style={{margin: '0 auto',  marginTop: '100px', textAlign: 'center', }}> You can include anything, e.g. image </h3>
        <ReactHover
         styles={styles.advanced}
         componentHtml={componentHtml.advancedComponentHtml}
        />
      </div>
    );
  }
}

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
  