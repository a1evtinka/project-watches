const React = require('react');
const Layout = require('./Layout');
// const NavMenu = require('./navMenu');
const OrderCard = require('./OrderCard');
const ModalRega = require('./ModalRega');
const ModalLogin = require('./ModalLogin');

module.exports = function OrdersPage({ orders }) {
  return (
    <Layout>
      <ModalRega />
      <ModalLogin />
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              {' '}
              <span className="icon-bar" />
              {' '}
              <span
                className="icon-bar"
              />
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <i
                className="fa fa-play fa-code"
              />
              {' '}
              Pavel Egorov Watches
            </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#page-top" className="page-scroll">Home</a></li>
              <li><a href="#about" className="page-scroll">About</a></li>
              <li><a href="#portfolio" className="page-scroll">Watches Collection</a></li>
              <li><a href="#contact" className="page-scroll">Order</a></li>
              <li>
                <a href="" className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm" className="page-scroll">Registration</a>
              </li>
              <li>
                <a href="" className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm2" className="page-scroll">Login</a>
              </li>
              <li>
                <a className="page-scroll" href="/admin_panel">Панель администратора</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="orders">
        <div className="main-text hidden-xs">
          <div className="col-md-12 text-center myheader">
            <h1>
              Pavel Egorov Watches
            </h1>
            <p>
              Orders
            </p>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Scetch (Link)</th>
              <th scope="col">Our Model</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => <OrderCard key={order.id} order={order} />)}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
