const ReactDOMServer = require('react-dom/server');
const React = require('react');

const addWatchesRouter = require('express').Router();
const addWatchesForm = require('../views/ModalOrder');

// // console.log('!!!!!!!!', Form);
const {
  Watch
} = require('../db/models');

// const { User } = require('../../db/models');
// const { Good } = require('../../db/models');

// formRouter.get('/', async (req, res) => {
//   const form = React.createElement(Form, {});
//   const html = ReactDOMServer.renderToStaticMarkup(form);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });

addWatchesRouter.post('/', async (req, res) => {
  // / оборачиваем в трай-кетч
  if (res.locals.user?.admin) {
    const {
      title,
      image,
      category,
      case1,
      strap,
      glass,
      mechanism,
      water,
      description,
      price,
    } = req.body;

    await Watch.create({
      title,
      image,
      category,
      case1,
      strap,
      glass,
      mechanism,
      water,
      description,
      price,
    });

    res.json({
      status: 'ок',
    });
  } else {
    res.redirect('/');
  }
});
//
module.exports = addWatchesRouter;