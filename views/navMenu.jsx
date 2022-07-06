const React = require('react');

module.exports = function NavMenu({ user }) {
  return (
  // Будет отображаться в шапке (из-за тега хедер)
    <header>
      <nav className="navbar navbar-light" style="background-color: #e3f2fd;">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navigation</a> */}
            {/* <button */}
            {/*  className="navbar-toggler" */}
            {/*  type="button" */}
            {/*  data-bs-toggle="collapse" */}
            {/*  data-bs-target="#navbarNav" */}
            {/*  aria-controls="navbarNav" */}
            {/*  aria-expanded="false" */}
            {/*  aria-label="Toggle navigation" */}
            {/* > */}
            {/*  <span className="navbar-toggler-icon" /> */}
            {/* </button> */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/registration">Registration</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
      {/*<ul>*/}
      {/*  /!* Если пользователь не залогинен, то видно кнопки(ссылки) регистрации *!/*/}
      {/*  {user && <li>{user.name}</li>}*/}
      {/*  /!* // Кнопка(ссылка) отправки домой (редерикт на главную) *!/*/}
      {/*  <li><a href="/">StarList</a></li>*/}
      {/*  /!* // Кнопка(ссылка) для регистрации *!/*/}
      {/*  <li><a href="/registration">Registration</a></li>*/}

      {/*  {user ? (<li><a href="/auth/logout">Logout</a></li>)*/}
      {/*    : (<li><a href="/login">Login</a></li>) }*/}
      {/*</ul>*/}
    </header>
  );
};
