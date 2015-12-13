import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import ReactHover from '..';


let styles = {
  
};

class App extends Component {
  static propTypes = {

  };

  render() {
   const { data, options } = this.props;
    return (
      <ReactHover 
        data={data} 
        options={options}
        styles={styles}
      />
    );
  }
}


const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App />, appRoot);
  
