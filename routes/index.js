const ReactDOMServer = require('react-dom/server');
const React = require('react');

const indexRouter = require('express').Router();
const Form = require('../views/Form');

// module.exports = indexRouter.get('/', async (req, res) => {
//   const form = React.createElement(Form, {});
//   const html = ReactDOMServer.renderToStaticMarkup(form);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });

// const router = require('express').Router();
// const nodemailer = require('nodemailer');
// const transporter = require('./nodemailer');

// const mail = {
//   from: 'Yashwant Chavan <a1evtina@list.ru>',
//   to: 'a1evtina@list.ru',
//   subject: 'Send Email Using Node.js',
//   text: 'Node.js New world for me',
//   html: '<b>Node.js New world for me</b>',
// };

// router.get('/', (req, res) => {
//   transporter.sendMail(mail, (error, response) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(`Message sent: ${response.message}`);
//     }

//     transporter.close();
//   });
// });

// module.exports = router;
module.exports = indexRouter