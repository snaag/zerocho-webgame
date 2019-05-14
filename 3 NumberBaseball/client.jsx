const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require ('react-hot-loader/root');
const NumberBaseball = require('./NumberBaseball');

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector('#root'));