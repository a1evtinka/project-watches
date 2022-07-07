const viewsRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Registration = require('../views/Registration');
const Main = require('../views/Main');
const Login = require('../views/Login');

// Создаем и рендерим компонент формы регистрации
viewsRouter.get('/', (req, res) => {
  const regform = React.createElement(Main, { user: res.locals.user });
  const html = ReactDOMServer.renderToStaticMarkup(regform);
  res.write('<!doctype html>');
  res.end(html);
});
viewsRouter.get('/registration', (req, res) => {
  const regform = React.createElement(Registration);
  const html = ReactDOMServer.renderToStaticMarkup(regform);
  res.write('<!doctype html>');
  res.end(html);
});
// Создаем и рендерим компонент формы логина(входа)
viewsRouter.get('/login', (req, res) => {
  const login = React.createElement(Login);
  const html = ReactDOMServer.renderToStaticMarkup(login);
  res.write('<!doctype html>');
  res.end(html);
});

module.exports = viewsRouter;
