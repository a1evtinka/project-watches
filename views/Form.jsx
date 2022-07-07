const React = require('react');
const Layout = require('./Layout');
// const doupload = require('../public/application')

module.exports = function Form() {
  return (
    <Layout>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">

            <form name = "orderForm" className="signup-form" action="/form" method="post" encType="multipart/form-data">
              <div className="form-group mt-5">
                <input type="text" name="inputename" className="form-control" placeholder="name..." required />
              </div>
              <div className="form-group mt-5">
                <input type="email" name="inputemail" className="form-control" placeholder="email..." required />
              </div>
              <div className="form-group mt-5">
            
                <label htmlFor="online_phone">Телефон:</label>
                <input
                  id="online_phone"
                  className="form-control"
                  name="inputephone"
                  type="tel"
                  maxLength="50"
                  autoFocus="autofocus"
                  required="required"
                  value="+7(___)___-__-__"
                  pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                  placeholder="+7(___)___-__-__"
                />

              </div>

              <select className="form-select" name="option" aria-label="Default select example">
                <option selected>Выберите часы из каталога</option>
                <option value="1" name="1">Часы 1</option>
                <option value="2" name="2">Часы 2</option>
                <option value="3" name="3">Часы 3</option>
              </select>

              <p>Либо загрузите ваш эскиз</p>

              <label>Файл</label>
              <input type="file" name="files" multiple />

              <div className="text-center mt-5">
                <button type="submit" className="btn btn-secondary">Отправить</button>
              </div>

            </form>
          </div>
        </div>
      </div>

    </Layout>
  );
};
