const React = require('react');
const NavMenu = require('./navMenu');

module.exports = function Layout({ user, children }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" />
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js" />
        <script defer src="/application.js" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <title>Document</title> */}
        <link rel="stylesheet" href=" https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/application.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous" />
        <script defer src="/application.js" />
        <script defer src="/phoneChecker.js" />
        <title>Часы от Романа</title>
      </head>
      <body>
        {/* Добавляем в бади перед чилдрен компонент навигейшен меню */}
        <NavMenu user={user} />
        {children}
      </body>
    </html>
  );
};
