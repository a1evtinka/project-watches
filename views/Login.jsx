const React = require('react');
const Layout = require('./Layout');

module.exports = function Login({ user }) {
  return (
    <Layout title="Login">
      <h1>
        Авторизация
      </h1>
      <form name="login">
        <label htmlFor="inputeemail">Login:</label>
        <input type="email" name="inputeemail" placeholder="введите email" />
        <br />
        <label htmlFor="inputpassword">Password:</label>
        <input type="password" name="inputpassword" placeholder="введите password" />
        <br />
        <button type="submit">Авторизоваться</button>
      </form>
      <div className="errorMessage" />
    </Layout>
  );
};
