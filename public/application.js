// Фетч для формы регистрации (если уже вошли ее нет - поэтому вопрос)
document.registration?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const res = await fetch('/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: event.target.inputelogin.value,
      email: event.target.inputemail.value,
      password: event.target.inputpassword.value,
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
      login: event.target.inputelogin.value,
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
  } else {
    // То дорисовываем (дописываем в див) полученную ошибку(не удалось войти в аккаунт)
    // TODO написать выведение ошибки, пришедшей с сервера в блок
  }
});
