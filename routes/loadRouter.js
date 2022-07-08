
const loadRouter = require('express').Router();
const multer = require('multer');
// const midllwareMulter = require('../middlewares/multer');

const upload = multer({ dest: 'uploads/' });

const Form = require('../views/Form');

const {
  Order,
} = require('../db/models');

formRouter.post('/', upload.single('files'), async (req, res, next) => {
  // console.log('регбaди', req.body);
  const filedata = req.file;
  console.log('файл дата', filedata);

  res.json({
    status: 'ок',
  });
});

module.exports = formRouter;
