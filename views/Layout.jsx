const React = require('react');
// const NavMenu = require('./NavMenu');

module.exports = function Layout({ user, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Watches From Roman</title>
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="shortcut icon" href="/img/fav.png" type="image/png" />
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/fonts/font-awesome/css/font-awesome.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/nivo-lightbox/nivo-lightbox.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/nivo-lightbox/default.css" />
        <link
          href="http://fonts.googleapis.com/css?family=Open+Sans:400,700,800,600,300"
          rel="stylesheet"
          type="text/css"
        />
        {/* <script type="text/javascript" src="js/modernizr.custom.js"></script> */}

      </head>
      <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
        {children}
        <script type="text/javascript" src="/js/jquery.1.11.1.js" />
        <script type="text/javascript" src="/js/bootstrap.js" />
        <script type="text/javascript" src="/js/SmoothScroll.js" />
        <script type="text/javascript" src="/js/nivo-lightbox.js" />
        <script type="text/javascript" src="/js/jquery.isotope.js" />
        <script type="text/javascript" src="/js/jqBootstrapValidation.js" />
        <script type="text/javascript" src="/js/contact_me.js" />
        <script type="text/javascript" src="/js/main.js" />
        <script type="text/javascript" defer src="/js/application.js" />
      </body>
    </html>
  );
};
