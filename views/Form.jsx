const React = require('react');
const Layout = require('./Layout');
// const doupload = require('../public/application')

module.exports = function Form() {
  return (
    <Layout>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">

            <form className="signup-form" action="/reg" method="post">
              <div className="form-group mt-5">
                <input type="text" name="username" className="form-control" placeholder="name..." required />
              </div>
              <div className="form-group mt-5">
                <input type="email" name="email" className="form-control" placeholder="email..." required />
              </div>
              <div className="form-group mt-5">
                <input type="text" name="phone" className="form-control" placeholder="phone..." required />
              </div>

              <select className="form-select" aria-label="Default select example">
                <option selected>Выберите часы</option>
                <option value="1">Часы 1</option>
                <option value="2">Часы 2</option>
                <option value="3">Часы 3</option>
              </select>

              <div>  
                <input type="file" name="file" id="file" />
                <button name="submit" type="submit">Загрузить файл</button>
              </div>


              {/* <div>
                <label className="form-label" htmlFor="customFile">Приложите ваш эскиз</label>
                <input type="file" className="form-control" id="customFile" placeholder="Приложить эскиз" />
              </div> */}

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
