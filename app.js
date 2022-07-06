require('@babel/register');
require('dotenv').config();

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');

const { sequelize } = require('./db/models');
const configApp = require('./config/configApp');


const app = express();
configApp(app);
const PORT = process.env.PORT ?? 3000;

// Импортируем созданный в отдельный файлах рутеры.
const indexRouter = require('./routes/index');
// const entriesRouter = require('./routes/entries');

// app.use('/', indexRouter);

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.post('/', (req, res) => {
  //   if (!req.body.email || !req.body.pass) return res.sendStatus(400);
  const message = {

    to: 'a1evtina@list.ru',
    subject: 'Hello',
    text: 'We will call you in 5 min',
    html: '<b>Thank you for your interest</b>',
  };
  mailer(message);
  user = req.body;
  res.redirect('/rega');
});
