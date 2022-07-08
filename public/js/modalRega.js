// const bootstrap = require('bootstrap');
//
// const myCarousel = document.querySelector('#myCarousel');
// const carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false,
// });

// Фетч для формы регистрации (если уже вошли ее нет - поэтому вопрос)
const button = document.querySelector('#button1');
button.addEventListener('click', async (event) => {
  event.preventDefault();
  const form = event.target.closest('form');
  // console.log(form.querySelector('#defaultForm-pass').value);
  let promo;
  form.querySelector('#orangeForm-name2').value === '123qwe' ? promo = true : promo = false;
  const res = await fetch('/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: form.querySelector('#orangeForm-name').value,
      email: form.querySelector('#defaultForm-email').value,
      password: form.querySelector('#defaultForm-pass').value,
      admin: promo,
    }),
  });
  //       // Дожидаемся ответа от сервера
  const result = await res.json();
  console.log(result);
  // Если пришел ответ ок
  if (result.status === 'ok') {
    // то перенаправляем на ручку логина(входа)
    window.location.href = '/';
    //       // если нет (не ок)
  } else {
    // То дорисовываем (дописываем в див) полученную ошибку(пользователь уже есть)
    document.querySelector('.errorMessage').innerText = result.errorMessage;
  }
});
//   // Фетч для формы входа (если уже вошли ее нет - поэтому вопрос)
//   document.login?.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const res = await fetch('/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: event.target.inputeemail.value,
//         password: event.target.inputpassword.value,
//       }),
//     });
//       // Дожидаемся ответа от сервера
//     const result = await res.json();
//     // console.log(result);
//     // Если пришел ответ ок
//     if (result.status === 'email check') {
//       document.querySelector('.password').innerText = await result.errorMessage;
//     }
//     if (result.status === 'password check') {
//       document.querySelector('.password').innerText = await result.errorMessage;
//     }
//     if (result.status === 'ok') {
//       // то перенаправляем на ручку мейн
//       window.location.assign('/');
//       // если нет (не ок)
//       // } else {
//       //   // То дорисовываем (дописываем в див) полученную ошибку(не удалось войти в аккаунт)
//       //   //
//       // }
//     }
//   });
