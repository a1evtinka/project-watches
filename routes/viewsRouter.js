const viewsRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
// const { where } = require('sequelize');
const Registration = require('../views/Registration');
const Main = require('../views/Main');
const Login = require('../views/Login');
// const AdminPanel = require('../views/AdminPanel');
// const { User } = require('../db/models');
const { Order, Watch } = require('../db/models');
const OrdersPage = require('../views/OrdersPage');

// Создаем и рендерим компонент формы регистрации
viewsRouter.get('/', async (req, res) => {
  const watch = await Watch.findAll();
  const regform = React.createElement(Main, { user: res.locals.user, watch });
  const html = ReactDOMServer.renderToStaticMarkup(regform);
  res.write('<!doctype html>');
  res.end(html);
});

viewsRouter.delete('/:id', async (req, res) => {
  if (res.locals.user?.admin) {
    await Watch.destroy({ where: { id: req.params.id } });
    res.json({ status: 'ok' });
  } else {
    res.redirect('/');
  }
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

viewsRouter.get('/admin_panel', async (req, res) => {
  if (res.locals.user?.admin) {
    const orders = await Order.findAll({
      include: [{
        model: Watch,
      }],
    });
    const page = React.createElement(OrdersPage, { orders });
    const html = ReactDOMServer.renderToStaticMarkup(page);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } else {
    res.redirect('/');
  }
});
// ДОБАВИТЬ ЛОГИКУ ТОГО, ЧТО ТОЛЬКО У АДМИНА ЕСТЬ ВОЗМОЖНОСТЬ УДАЛЯТЬ,ИЗМЕНЯТЬ И ДОБАВЛЯТЬ ЭЛЕМЕНТЫ
// if (res.locals.user?.admin) {

// viewsRouter.get('/', async (req, res) => {
//   let watch;
//   try {
//     watch = await Watch.findAll();
//     console.log(watch);
//   } catch (error) {
//     res.status('500').send('Database failure');
//     return;
//   }
//   const watches = React.createElement(Watch, { watch });
//   const html = ReactDOMServer.renderToStaticMarkup(watches);
//   res.write('<!doctype html>');
//   res.end(html);
// });

module.exports = viewsRouter;
