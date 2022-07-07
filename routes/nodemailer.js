const nodemailer = require('nodemailer');
require('dotenv').config();

const { SMTP_TO_EMAIL, SMTP_TO_PASSWORD } = process.env;

// const transporter = nodemailer.createTransport(
//   {
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: SMTP_TO_EMAIL,
//       pass: SMTP_TO_PASSWORD,
//     },
//   },
// );

// module.exports = transporter;