const React = require('react');
// const Layout = require('./Layout');
// const doupload = require('../public/application')

module.exports = function File() {
  return (
    <div>
      <p>Для индивидуального заказа загрузите Ваш эскиз:</p>
      <form name="orderForm" className="signup-form" action="/form" method="post" encType="multipart/form-data" id="formForOrder">

        <label>Файл</label>
        <input type="file" name="files" id="fileFormOrder" className=" btn-secondary btn-lg" multiple />

        <div className="text-center mt-5">
          <button type="submit" className="btn btn-secondary btn-default btn-lg" id="btformorder">Отправить</button>
        </div>
      </form>
    </div>

  );
};
