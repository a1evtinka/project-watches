// console.log(document.querySelectorAll('#update'))
const button = document.querySelectorAll('#update');
button.forEach((el) => el.addEventListener('click', async (event) => {
  // event.preventDefault();
  console.log('123');
  const id = event.target.getAttribute('editid');
  // console.log(id);
  // console.log(form.querySelector('#defaultForm-pass').value);
  // let promo;
  // form.querySelector('#orangeForm-name2').value === '123qwe' ? promo = true : promo = false;
  const res = await fetch(`/edit/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: event.target.inputetitle.value,
      category: event.target.inputecategory.value,
      case: event.target.inputecase.value,
      strap: event.target.inputestrap.value,
      glass: event.target.inputeglass.value,
      mechanism: event.target.inputemechanism.value,
      water: event.target.inputewater.value,
      description: event.target.inputedescription.value,
      price: event.target.inputeprice.value,
    }),
  });
  //       // Дожидаемся ответа от сервера
  const result = await res.json();
  // console.log(result);
  // Если пришел ответ ок
  if (result.status === 'ok') {
    // то перенаправляем на ручку логина(входа)
    window.location.href = '/';
    //       // если нет (не ок)
  } else {
    // То дорисовываем (дописываем в див) полученную ошибку(пользователь уже есть)
    document.querySelector('.errorMessage').innerText = result.errorMessage;
  }
}));
