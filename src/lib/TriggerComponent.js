import React, { Component, PropTypes } from 'react';

export default class TriggerComponent extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired,
    componentHtml: PropTypes.object.isRequired,
    setVisibility: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

  }

  render() {
    const { styles, componentHtml } = this.props;
    return (
      <h1 
        style={styles.trigger} 
        onMouseOver={this.onMouseOver.bind(this)}
        onMouseOut={this.onMouseOut.bind(this)}
        dangerouslySetInnerHTML={{ __html: componentHtml.trigger }}
        > 
      </h1>
    );
  }

  onMouseOver() {
    const { setVisibility } = this.props;
    setVisibility(true);
  }

  onMouseOut() {
    const { setVisibility } = this.props;
    setVisibility(false);
  }
}
