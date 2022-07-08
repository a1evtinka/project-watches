const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ user }) {
  return (
    <Layout title="Registration">
      <h1>
        Регистрация
      </h1>
      <form name="registration">
        <label htmlFor="inputename">Name:</label>
        <input type="text" name="inputename" placeholder="введите name" />
        <br />
        <label htmlFor="inputemail">Email:</label>
        <input type="email" name="inputemail" placeholder="введите email" />
        <br />
        <label htmlFor="inputpassword">Пароль:</label>
        <input className="password" type="password" name="inputpassword" placeholder="введите password" required minLength={8} />
        <br />
        <label htmlFor="inputepromo">promocode:</label>
        <input type="text" name="inputepromo" placeholder="введите promocode" />
        <br />
        <button type="submit">Register me!</button>
      </form>
      <div className="errorMessage" />
    </Layout>
  );
};
