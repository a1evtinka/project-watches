const mailer = require('./nodemailer');
const router = require('router')

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

module.exports = router;

console.log('joka and boka');