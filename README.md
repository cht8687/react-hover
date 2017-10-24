[![Join the chat at https://gitter.im/cht8687/react-hover](https://badges.gitter.im/cht8687/react-hover.svg)](https://gitter.im/cht8687/react-hover?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<big><h1 align="center">React Hover --- Turn anything to a 'hoverable' object</h1></big>

<p align="center">
  <a href="https://circleci.com/gh/cht8687/react-hover">
    <img src="https://circleci.com/gh/cht8687/react-hover.svg?style=shield"
         alt="Circle CI">
  </a>

  <a href="https://www.npmjs.com/package/react-hover">
    <img src="https://img.shields.io/npm/v/react-hover.svg?style=flat-square"
         alt="NPM Version">
  </a>

 <a href="https://coveralls.io/github/cht8687/react-hover?branch=master">
    <img src="https://coveralls.io/repos/cht8687/react-hover/badge.svg?branch=master&service=github" alt="Coverage Status" />
 </a>

  <a href="https://travis-ci.org/cht8687/react-hover">
    <img src="https://img.shields.io/travis/cht8687/react-hover.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/react-hover">
    <img src="http://img.shields.io/npm/dm/react-hover.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/cht8687/react-hover.svg">
    <img src="https://david-dm.org/cht8687/react-hover.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/cht8687/react-hover/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/react-hover.svg?style=flat-square"
         alt="License">
  </a>

  <a href="http://standardjs.com/">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg"
         alt="License">
  </a>
</p>

<p align="center"><big>

</big></p>


![React hover](src/example/react-hover-new.gif)


## Installation

### npm

```
$ npm install --save react-hover
```

## Demo

[Demo](http://cht8687.github.io/react-hover/example/)

## Example code

[Code Example](https://github.com/cht8687/react-hover/blob/master/src/example/Example.js)


## Usage

You can turn plain HTML or your custom trigger/hover components in React-hover.

Below is the example of custom components:
```js
<ReactHover
  options={optionsCursorTrueWithMargin}>
  <ReactHover.Trigger type='trigger'>
    <TriggerComponent />
  </ReactHover.Trigger>
  <ReactHover.Hover type='hover'>
    <HoverComponent />
  </ReactHover.Hover>
</ReactHover>
```

Or plain HTML element:

```js
<ReactHover
  options={optionsCursorTrueWithMargin}>
  <ReactHover.Trigger type='trigger'>
    <h1 style={{background: '#abbcf1', width: '200px'}}> Hover on me </h1>
  </ReactHover.Trigger>
  <ReactHover.Hover type='hover'>
    <h1> I am hover HTML </h1>
  </ReactHover.Hover>
</ReactHover>
```

## Options

#### `options`: PropTypes.object.isRequired

Set the options.

```js

const options = {
  followCursor:true,
  shiftX: 20,
  shiftY: 0
}

```
`followCursor`: define if hover object follow mouse cursor
`shiftX`: left-right shift the hover object to the mouse cursor
`shiftY`: up-down shift the hover object to the mouse cursor


## type

#### `type`: PropTypes.string

Set the type.

```js

<ReactHover.Trigger type='trigger'>
<ReactHover.Hover type='hover'>

```
This prop defines the type name. It must be declared as above if you minify your code in production.

## Development

```
$ git clone git@github.com:cht8687/react-hover.git
$ cd react-hover
$ npm install
$ npm run dev
```

Then

```
open http://localhost:8080/webpack-dev-server/
```

## License

MIT
