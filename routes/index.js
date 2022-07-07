// const router = require('express').Router();
// const nodemailer = require('nodemailer');
// const transporter = require('./nodemailer');
const indexRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Watch } = require('../db/models');
const WatchesList = require('../views/WatchesList');

// indexRouter.get('/', async (req, res) => {
//   console.log('Trying to get all the stars, my lord!');
//   let watch;
//   try {
//     watch = await Watch.findAll();
//   } catch (error) {
//     res.status('500').send('Database failure');
//     return;
//   }
//
//   const watcheslist = React.createElement(WatchesList, {
//     watch,
//     user: { name: 'AAAAAA' }, //res.locals.user,
//   });
//   const html = ReactDOMServer.renderToStaticMarkup(watcheslist);
//   res.write('<!doctype html>');
//   res.end(html);
// });
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

module.exports = indexRouter;
