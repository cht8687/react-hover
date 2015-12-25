import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactHover from '..';
import * as styles from './css';
import * as componentHtml from './componentHtml';

const optionsCursorFalse = {
  followCursor:false
}

const optionsCursorTrue = {
  followCursor:true
}

const optionsCursorTrueWithMargin = {
  followCursor:true,
  shiftX: 20,
  shiftY: 0
}

class App extends Component {

  render() {

    return (
      <div>

        <h3 style={{margin: '0 auto', textAlign: 'center'}}> Basic </h3>
        <ReactHover
         styles={styles.basic}
         componentHtml={componentHtml.basicComponentHtml}
         options={optionsCursorFalse}
        />

        <h3 style={{margin: '0 auto',  marginTop: '100px', textAlign: 'center', }}> You can include anything, e.g. image </h3>
        <ReactHover
         styles={styles.advanced}
         componentHtml={componentHtml.advancedComponentHtml}
         options={optionsCursorTrue}
        />

        <h3 style={{margin: '0 auto',  marginTop: '100px', textAlign: 'center', }}> You can set curor follow options, so the pop up will follow the mouse cursor. 
        </h3>

        <ReactHover
         styles={styles.cursor}
         componentHtml={componentHtml.advancedComponentHtml}
         options={optionsCursorTrueWithMargin}
        />

      </div>
    );
  }
}

const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
  