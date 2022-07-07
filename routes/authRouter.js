const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Watch } = require('../db/models');
// const { Entry } = require('../db/models');

// Ручка метода пост для получения с фетча введенных данных из формы регистрации
authRouter.post('/registration', async (req, res) => {
  // оборачиваем в трай-кетч
  try {
    // деструктором забираем из рег.бади введенные емейл и пароль в форму регистрации
    const {
      name, email, password, admin,
    } = req.body;
    // ищем есть ли в БД полученный с фитча емейл
    const user = await User.findOne({
      where: {
        name,
      },
    });
    if (!email.includes('@')) {
      res.json({ status: 'email check', errorMessage: 'Введите корректную почту' });
      return;
    }
    // Если есть отправляем ошибку, что пользователь уже регистрировался
    if (password.length < 8) {
      res.json({ status: 'password check', errorMessage: 'Пароль меньше 8 символов' });
      return;
    }
    if (user) {
      res.json({ status: 'notok', errorMessage: 'Пользователь уже зарегистрирован' });
      return;
    }
    // Кэшируем (скрываем) пароль в БД
    const hash = await bcrypt.hash(req.body.password, 10);
    // Создаем запись в БД с кэшированным паролем
    await User.create({
      name,
      email,
      password: hash,
      admin,
    });
    // Отправляем на фронт, что все гуд
    res.json({ status: 'ok' });
    // Если произошла ошибка, то от падения сервера спасает этот кетч
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});
// Ручка метода пост для получения с фетча введенных данных из формы входа(логина)
authRouter.post('/login', async (req, res) => {
  // оборачиваем в трай-кетч
  try {
    // деструктором забираем из рег.бади введенные емейл и пароль в форму входа(логина)
    const { email, password } = req.body;
    // ищем есть ли в БД пользователь
    const user = await User.findOne({
      where: {
        email,
      },
    });
    // Если пользователя нет, то отправляем ошибку
    if (!user) {
      res.json({ status: 'notok', errorMessage: 'Такого пользователя не существует' });
      return;
    }
    // Проверяем правильно ли введен пароль
    const authOk = bcrypt.compare(password, user.password);
    // если нет, то отправляем ошибку
    if (!authOk) {
      res.json({ status: 'notok', errorMessage: 'Неверный пароль!' });
      return;
    }
    // Создаем сессию для пользователя после его входа в аккаунт
    req.session.user = user;
    res.json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

// Ручка для кнопки(ссылки) логаута
authRouter.get('/logout', async (req, res) => {
  // Удаляем при этом сессию для этого юзера
  req.session.destroy();
  // Чистим куки для этого пользователя
  res.clearCookie('user_sid');
  // Перенаправляем на главную страницу
  res.redirect('/');
});

authRouter.delete('/:id', async (req, res) => {
  console.log(req.params.id);
  await Watch.destroy({ where: { id: req.params.id } });
});
module.exports = authRouter;
