const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Router = require('express').Router();
const { Order, Watch } = require('../db/models');
const OrdersPage = require('../views/OrdersPage');

Router.get('/', async (req, res) => {
  const orders = await Order.findAll({
    include: [{
      model: Watch,
    }],
  });
  const page = React.createElement(OrdersPage, { orders });
  const html = ReactDOMServer.renderToStaticMarkup(page);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = Router;
