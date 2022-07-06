const ReactDOMServer = require('react-dom/server');
const React = require('react');

const indexRouter = require('express').Router();
const Form = require('../views/Form');

module.exports = indexRouter.get('/', async (req, res) => {
  const form = React.createElement(Form, {});
  const html = ReactDOMServer.renderToStaticMarkup(form);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
