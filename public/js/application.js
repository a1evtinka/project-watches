// const bootstrap = require('bootstrap');
//
// const myCarousel = document.querySelector('#myCarousel');
// const carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false,
// });

// Фетч для формы регистрации (если уже вошли ее нет - поэтому вопрос)
document.registration?.addEventListener('submit', async (event) => {
  event.preventDefault();
  let promo;
  event.target.inputepromo.value === '123qwe' ? promo = true : promo = false;
  const res = await fetch('/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: event.target.inputename.value,
      email: event.target.inputemail.value,
      password: event.target.inputpassword.value,
      admin: promo,
    }),
  });
    // Дожидаемся ответа от сервера
  const result = await res.json();
  console.log(result);
  // Если пришел ответ ок
  if (result.status === 'ok') {
    // то перенаправляем на ручку логина(входа)
    window.location.href = '/login';
    // если нет (не ок)
  } else {
    // То дорисовываем (дописываем в див) полученную ошибку(пользователь уже есть)
    document.querySelector('.errorMessage').innerText = result.errorMessage;
  }
});
// Фетч для формы входа (если уже вошли ее нет - поэтому вопрос)
document.login?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const res = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: event.target.inputeemail.value,
      password: event.target.inputpassword.value,
    }),
  });
    // Дожидаемся ответа от сервера
  const result = await res.json();
  // console.log(result);
  // Если пришел ответ ок
  if (result.status === 'email check') {
    document.querySelector('.password').innerText = await result.errorMessage;
  }
  if (result.status === 'password check') {
    document.querySelector('.password').innerText = await result.errorMessage;
  }
  if (result.status === 'ok') {
    // то перенаправляем на ручку мейн
    window.location.assign('/');
    // если нет (не ок)
    // } else {
    //   // То дорисовываем (дописываем в див) полученную ошибку(не удалось войти в аккаунт)
    //   //
    // }
  }
});

const del = document.querySelectorAll('#delete');
console.log(del);
del.forEach((el) => el.addEventListener('click', async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('delid');
  // console.log(id);
  await fetch(`/${id}`, {
    method: 'DELETE',
  });
  event.target.closest('.col-sm-6').remove();
  // event.target.parentElement.parentElement.parentElement.remove();
}));
