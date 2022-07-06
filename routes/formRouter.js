const ReactDOMServer = require('react-dom/server');
const React = require('react');

const formRouter = require('express').Router();
const Form = require('../views/Form');

console.log('!!!!!!!!', Form);

// const { User } = require('../../db/models');
// const { Good } = require('../../db/models');

module.exports = formRouter.get('/form', async (req, res) => {
  const form = React.createElement(Form, {});
  const html = ReactDOMServer.renderToStaticMarkup(form);
  res.write('<!DOCTYPE html>');
  res.end(html);
});
