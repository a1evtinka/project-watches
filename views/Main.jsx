const React = require('react');
const Carousel = require('./Carousel');
const Layout = require('./Layout');
const ModalRega = require('./ModalRega');
const ModalLogin = require('./ModalLogin');
const Form = require('./Form');
const WatchCollection = require('./WatchCollection');

module.exports = function Main({ user, watch }) {
  return (
    <Layout user={user}>
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
                {
                  (user && user.name) || <a href="" className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm" className="page-scroll">Registration</a>
                }
              </li>
              <li>
                {
                  user
                    ? <a className="page-scroll" href="/auth/logout">Logout</a>
                    : <a href="" className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm2" className="page-scroll">Login</a>
                }
              </li>
              <li>
                {
                  (user && user.admin)
                    ? <a className="page-scroll" href="/admin_panel">Admin Panel</a>
                    : <div />
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header id="header">

        <div className="intro">
          <Carousel />
          {/* <div className="container">
            <div className="row">
              <div className="intro-text">
                <h1>Watches</h1>
                <p>Watch Workshop • Product Design</p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">Learn More</a>
              </div>
            </div>
          </div> */}
        </div>
      </header>
      <div id="about">
        <div className="container">
          <div className="section-title text-center center">
            <h2>About Me</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img
                src="/img/bartender.png"
                className="img-responsive"
                alt=""
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <p>Меня зовут Роман! Рад знакомству. Я очень люблю когда все делается в назначенный срок, поэтому начал производство часов ручной работы</p>
                <p>Моя главная особенность - это стиль. Все часы представленные моей мастерской - это единственный экземпляр.</p>
                <a href="#portfolio" className="btn btn-default btn-lg page-scroll">Watches Collection</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WatchCollection user={user} watch={watch} />
      <div id="contact" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Order</h2>
            <hr />
          </div>
          <div className="col-md-8 col-md-offset-2">
            {/* <form name="sentMessage" id="contactForm" noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                />
                <p className="help-block text-danger" />
              </div>
              <div id="success" />
              <button type="submit" className="btn btn-default btn-lg">Make an order</button>
            </form>
            <ModalRega />
            </form> */}
            <Form />
            <div className="social">
              <ul>
                {/* БУДЕМ ЛИ ДЕЛАТЬ ССЫЛКИ? */}
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://github.com/a1evtinka/project-watches"><i className="fa fa-github" /></a></li>
                <li><a href="#"><i className="fa fa-codepen" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <div className="fnav">
            <p>Copyright &copy; 2022 Elbrus. Designed by Tigers.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
