// const ReactDOMServer = require('react-dom/server');
// const React = require('react');

// const multer = require('multer');
// const upload = multer({ dest: '../public/uploads' });
const formRouter = require('express').Router();
const Form = require('../views/Form');
const transporter = require('./nodemailer');

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

  // отправка письма start
  // console.log('мыло пользователя', email);

  const mail = {
    from: 'Pavel Egorov <pewatches2022@gmail.com>',
    to: email,
    subject: `Dear ${name}! Thank you for your order!`,
    text: `Dear ${name}!`,
    html: '<b>Thank you for your interest! We will call you in 5 min. Pavel Egorov Watches</b>',
  };

  transporter.sendMail(mail, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Message sent: ${response.message}`);
    }

    transporter.close();
  });
  // отправка письма finish

  res.json({
    status: 'ок',
  });
});

module.exports = formRouter;
