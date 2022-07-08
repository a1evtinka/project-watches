// валидация номера телефона

// поиск местоположения курсора
function setCursorPosition(pos, e) {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    const range = e.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}
// проверка вводимых пользователей символов
function mask(e) {
  // console.log('mask', e);
  let matrix = this.placeholder;
  let // .defaultValue
    i = 0;
  const def = matrix.replace(/\D/g, '');
  let val = this.value.replace(/\D/g, '');
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, (a) => val.charAt(i++) || '_');
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf('_');
  setCursorPosition(i, this);
}
window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#online_phone');
  input.addEventListener('input', mask, false);
  input.focus();
  setCursorPosition(3, input);
});
