# React hover --- hover anything 
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cht8687/help)


## Installation

### npm

```
$ npm install --save react-hover
```

## Demo

[Demo](http://cht8687.github.io/react-hover/example/)


## Usage

```js
<ReactHover
    styles={styles}
    componentHtml={componentHtml}
/>

```
## Options

#### `styles`: PropTypes.object.isRequired

```js
export const basic = {
  trigger: {
    background: '#E0037E',
    width: '200px',
    margin: '0 auto'
  },

  hoverComponent: {
    height: '200px',
    overflowY: 'auto',
    outline: '1px solid blue',
    width: '300px',
    background: '#E8E27E',
    display: 'none',
    position: 'absolute',
    margin: '-20px 0 0 717px'
  }
};
```
`trigger` object is for the style of trigger component. 
`hoverComponent` is for hover object.
You can modify the css to anything to fit your needs. In other words, the whole styles are flexible.

**Note that you can use other module system instead of ES6 for exporting this object.

#### `componentHtml`: PropTypes.object.isRequired

```js
export const componentHtml = {
  trigger: '<h1> pop up header </h1> <p> pop up content </p>',
  hoverComponent: 'hover me'
};

```
`componentHtml` contains the html code which you'd like to display.
`trigger` object can be showed once a `mouseOver` event fires on `hoverComponent`.


## Development

```
$ git clone git@github.com:cht8687/react-listview-sticky-header.git
$ cd react-listview-sticky-header
$ npm install
$ webpack-dev-server
```

Then

```
open http://localhost:8080/webpack-dev-server/
```

## License

MIT
