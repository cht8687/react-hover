import React, { Component, PropTypes } from 'react';
import Header from './lib/Header';
import ContentManager from './lib/ContentManager';
import { Motion, spring } from "react-motion";

export default class ReactAccordion extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired,
    headerAttName: PropTypes.string.isRequired,
    itemsAttName: PropTypes.string.isRequired,
    styles: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      data
    }
  }

  render() {
    const { headerAttName, itemsAttName } = this.props;
    const { styles: {outerDiv, ul, listHeader, listItems, li} } = this.props;
    const { data } = this.state;

    let _refi = 0;
    let makeHeaderRef = () => {
      return `ListHeader-${_refi}`;
    };

    let makeItemRef = () => {
      return `ListItem-${_refi}`;
    };

    return (
      <div ref="listview" style={outerDiv}>
        <ul style={ul}>
        {
          Object.keys(data).map((k, index) => {
          const header = data[k][headerAttName];
          const items  = data[k][itemsAttName];
          const { isOpened } = data[k];
          _refi++;
          const headerRef = makeHeaderRef();
          const itemRef = makeItemRef();

          return (
            <Motion
              key={index}
              defaultStyle={{h: 0}}
              style={{h: spring(isOpened ? 110 : 0)}}>
              {
                ({h}) => (
                  <div>
                    <li>
                      <Header
                        ref={headerRef}
                        header={header}
                        headerIndex={index}
                        styles={listHeader}
                        handleToggle={this.handleToggle.bind(this, index)}
                      />
                      <div
                        style={{
                          display: `block`,
                          overflow: `hidden`,
                          height:`${h}`,
                          ...listItems
                          }}>
                        <ContentManager
                         ref={itemRef}
                         items={items}
                         styles={listItems}
                        />
                      </div>
                    </li>
                  </div>
                )
              }
            </Motion>
          );
          })
        }
        </ul>
      </div>
    );
  }

  handleToggle(headerIndex) {
    let { data } = this.state;
    const { options: { autoClapse } } = this.props;
    let dataCopy = data;

    if(autoClapse) {
      dataCopy.forEach((e, index) => {
        if(index != headerIndex) {
          e.isOpened = false;
        }
      });
    }

    dataCopy[headerIndex].isOpened = !dataCopy[headerIndex].isOpened;
    const newData = Object.assign({}, dataCopy);

    this.setState(
      newData
    )
  }
}
