// module.exports = doupload
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
  // console.log(result);
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
  // console.log(event.target.inputeemail.value);
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
del.forEach((el) => el.addEventListener('click', async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('delid');
  // console.log(id);
  const res = await fetch(`/${id}`, {
    method: 'DELETE',
  });
  const result = await res.json();
  if (result.status === 'ok') {
    event.target.closest('.col-sm-6').remove();
  }
  // event.target.parentElement.parentElement.parentElement.remove();
}));

// fetch формы заказа start
document.querySelector('#btformorder')
  .addEventListener('click', async (event) => {
    event.preventDefault();
    const formOrder = event.target.closest('form');
    console.log(formOrder.querySelector('.form-control').value);

    const res = await fetch('/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formOrder.querySelector('#nameFormOrder').value,
        email: formOrder.querySelector('#emailFormOrder').value,
        phone: formOrder.querySelector('#online_phone').value,
        watch_id: formOrder.querySelector('#selectWatchFormOrder').value,
        sketch: formOrder.querySelector('#fileFormOrder').value,
      }),
    });

    const result = await res.json();
    console.log('фетч ответ от серверва', result);
  });
// fetch формы заказа finish
