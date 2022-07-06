const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'a1evtina@list.ru',
      pass: 'vorobey7',
    },
  },
  {
    from: 'Pavel Egorov Watches <a1evtina@list.ru>',
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email send: ', info);
  });
};

module.exports = mailer;

// send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"Pavel Egorov Watches" <pewatches@example.com>', // sender address
//     to: 'a1evtina@list.ru', // list of receivers
//     subject: 'Hello', // Subject line
//     text: 'We will call you in 5 min', // plain text body
//     html: '<b>Thank you for your interesr</b>', // html body
//   });

//   console.log('Message sent: %s', info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// Preview only available when sending through an Ethereal account
//   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);
