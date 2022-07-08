// const ReactDOMServer = require('react-dom/server');
// const React = require('react');
const formRouter = require('express').Router();
const fileRouter = require('express').Router();
const multer = require('multer');
// const midllwareMulter = require('../middlewares/multer');

const upload = multer({ dest: 'uploads/' });

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
fileRouter.post('/', upload.single('files'), async (req, res, next) => {
  const filedata = req.file;
  console.log(filedata);
});

// upload.single('filedata'),
formRouter.post('/', async (req, res) => {
  // console.log('регбaди', req.body);
  // const filedata = req.file;
  // console.log('файл дата', filedata);

  const {
    name,
    email,
    phone,
    watch_id,
    sketch,

  } = req.body;

  const order = await Order.create({
    name,
    email,
    phone,
    watch_id,
    sketch,
  });

  res.json({
    status: 'ок',
  });
});


module.exports = { formRouter, fileRouter };
