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

// const { Watch } = require('../db/models');
// const WatchesList = require('../views/WatchesList');

// indexRouter.get('/', async (req, res) => {
//   console.log('Trying to get all the stars, my lord!');
//   let watch;
//   try {
//     watch = await Watch.findAll();
//   } catch (error) {
//     res.status('500').send('Database failure');
//     return;
//   }

//   const watcheslist = React.createElement(WatchesList, {
//     watch,
//     user: { name: 'AAAAAA' }, // res.locals.user,
//   });
//   const html = ReactDOMServer.renderToStaticMarkup(watcheslist);
//   res.write('<!doctype html>');
//   res.end(html);
// });

module.exports = indexRouter;
