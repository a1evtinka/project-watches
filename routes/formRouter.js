const ReactDOMServer = require('react-dom/server');
const React = require('react');

const formRouter = require('express').Router();
const Form = require('../views/Form');

// console.log('!!!!!!!!', Form);
const {
  Order,
} = require('../db/models');
// const { User } = require('../../db/models');
// const { Good } = require('../../db/models');

// formRouter.get('/', async (req, res) => {
//   const form = React.createElement(Form, {});
//   const html = ReactDOMServer.renderToStaticMarkup(form);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });

formRouter.post('/form', async (req, res) => {
  // оборачиваем в трай-кетч
  try {
    const {
      name,
      email,
      phone,
      sketch,
      watch_id,
    } = req.body;
    const order = await Order.create({
      name,
      email,
      phone,
      sketch,
      watch_id,
    });
    res.json({
      status: 'ок',
      errorMessage: 'Введите корректную почту',
    });
    console.log('test');
  } catch (err) {
    res.status(500)({ errorMessage: err.Message });
  }
});

module.exports = formRouter;
