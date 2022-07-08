require('@babel/register');
require('dotenv').config();

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');

// const { sequelize } = require('./db/models');
const configApp = require('./config/configApp');

const app = express();
// const PORT = process.env.PORT ;

configApp(app);
const PORT = process.env.PORT ?? 3000;

// const nodemailer = require('nodemailer');
// const transporter = require('./routes/nodemailer');

// const mail = {
//   from: 'Yashwant Chavan <a1evtina@list.ru>',
//   to: 'a1evtina@list.ru',
//   subject: 'Send Email Using Node.js',
//   text: 'Node.js New world for me',
//   html: '<b>Node.js New world for me</b>',
// };

// transporter.sendMail(mail, (error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(`Message sent: ${response.message}`);
//   }
//
//   transporter.close();
// });

// Импортируем созданный в отдельный файлах рутеры.

const indexRouter = require('./routes/index');
const ordersRouter = require('./routes/orders');
// const entriesRouter = require('./routes/entries');
// const formRouter = require('./routes/formRouter');

// app.use('/', indexRouter);
// app.use('/admin_panel', ordersRouter);
// app.use('/form', formRouter)

//роутер для загрузки изображений
// const uploadRouter = require('./routes/uploadRouter');

// app.use('/', uploadRouter);

app.use((req, res, next) => {
  const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
  next(error);
});

// Отлавливаем HTTP-запрос с ошибкой и отправляем на него ответ.
app.use((err, req, res) => {
  // Получаем текущий ражим работы приложения.
  const appMode = req.app.get('env');
  // Создаём объект, в котором будет храниться ошибка.
  let error;

  // Если мы находимся в режиме разработки, то отправим в ответе настоящую ошибку.
  // В противно случае отправим пустой объект.
  if (appMode === 'development') {
    error = err;
  } else {
    error = {};
  }

  // Записываем информацию об ошибке и сам объект ошибки в специальные переменные,
  // доступные на сервере глобально, но только в рамках одного HTTP - запроса.
  res.locals.message = err.message;
  res.locals.error = error;

  // Задаём в будущем ответе статус ошибки. Берём его из объекта ошибки, если он там есть.
  // В противно случае записываем универсальный стату ошибки на сервере - 500.
  res.status(err.status || 500);
  // Ренедрим React-компонент Error и отправляем его на клиент в качестве ответа.
  const errorPage = React.createElement(Error, res.locals);
  const html = ReactDOMServer.renderToStaticMarkup(errorPage);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});

// app.post('/', (req, res) => {
//   //   if (!req.body.email || !req.body.pass) return res.sendStatus(400);
//   const message = {
//
//     to: 'a1evtina@list.ru',
//     subject: 'Hello',
//     text: 'We will call you in 5 min',
//     html: '<b>Thank you for your interest</b>',
//   };
//   mailer(message);
//   user = req.body;
//   res.redirect('/rega');
// });
