const multer = require('multer');
const uploadMiddleware = require('./upload-midleware');
const orderForm = require('../views/Form')

module.exports = {
  uploadForm(req, res) {
    res.render(orderForm);
  },
  uploadFiles(req, res) {
    const upload = multer({
      storage: uploadMiddleware.files.storage(),
      allowedFiles: uploadMiddleware.files.allowedFiles,
    }).single('files');
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        res.send(err);
      } else if (err) {
        res.send(err);
      } else {
        res.render(orderForm);
      }
    });
  },
};