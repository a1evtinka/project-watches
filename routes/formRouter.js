// const ReactDOMServer = require('react-dom/server');
// const React = require('react');

const multer = require('multer');
const upload = multer({ dest: '../public/uploads' });
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

// upload.single('filedata'),
formRouter.post('/', async (req, res) => {
  console.log('регбaди', req.body);
  // const filedata = req.file;
  const {
    name,
    email,
    phone,
    watch_id,
  } = req.body;

  const order = await Order.create({
    name,
    email,
    phone,
    watch_id,
  });

  res.json({
    status: 'ок',
  });
});

module.exports = formRouter;
