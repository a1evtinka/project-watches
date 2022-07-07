const React = require('react');

module.exports = function Carousel() {
  return (


    <div className="container" id="funny">
      <div className="row">
        <div className="col-md-12">
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active" />
              <li data-target="#carousel-example-generic" data-slide-to="1" />
              <li data-target="#carousel-example-generic" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <img src="/img/test12.jpg" alt="First slide" />
                <div className="carousel-caption">
                  <h3>
                    First slide

                  </h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.

                  </p>
                </div>
              </div>
              <div className="item">
                <img src="/img/test12.jpg" alt="Second slide" />
                <div className="carousel-caption">
                  <h3>
                    Second slide
                  </h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.

                  </p>
                </div>
              </div>
              <div className="item">
                <img src="/img/test12.jpg" alt="Third slide" />
                <div className="carousel-caption">
                  <h3>
                    Third slide

                  </h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.

                  </p>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" />

            </a>
            <a
              className="right carousel-control"
              href="#carousel-example-generic"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right" />
            </a>
          </div>
          <div className="main-text hidden-xs">
            <div className="col-md-12 text-center">
              <h1>
                Static Headline

              </h1>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <a href="#about" className="btn btn-custom btn-lg page-scroll">Learn More</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
