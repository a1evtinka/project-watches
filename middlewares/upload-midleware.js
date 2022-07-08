const multer = require('multer');
//мидлварка для сохранения изображения на сервер в папку public/uploads/
module.exports.files = {
  storage() {
    const storage = multer.diskStorage({
      destination(req, file, cb) {
        cb(null, 'public/uploads/');
      },
      filename(req, file, cb) {
        cb(null, file.originalname);
      },
    });

    return storage;
  },
  //проверяеем расширение файла 
  allowedFiles(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(pdf|jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
      req.fileValidationError = 'Only pdf|jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF file type are allowed!';
      return cb(new Error('Only pdf|jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF file type  are allowed!'), false);
    }
    cb(null, true);
  },
};