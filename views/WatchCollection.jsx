const React = require('react');
// const Watch = require('./Watch');

module.exports = function WatchCollection({ user, watch }) {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="section-title text-center center">
          <h2>Watches Collection</h2>
          <hr />
        </div>
        <div className="categories">
          <ul className="cat">
            <li>
              <ol className="type">
                <li><a href="#" data-filter="*" className="active">All</a></li>
                <li><a href="#" data-filter=".web">Web Design</a></li>
                <li><a href="#" data-filter=".photography">Photography</a></li>
                <li><a href="#" data-filter=".product">Product Design</a></li>
              </ol>
            </li>
          </ul>
          <div className="clearfix" />
        </div>
        <div className="row">
          <div className="portfolio-items">
            {watch.map((el) => (
              <div className="col-sm-6 col-md-3 col-lg-3 web">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    <div>
                      <a
                        // БОЛЬШАЯ КАРТИНКА>
                        href={`/img/portfolio/${el.image}`}
                        title={`Модель:${el.title}
                      Категория: ${el.category}
                      Материал корпуса: ${el.case}
                      Материал ремешка: ${el.strap}
                      Стекло: ${el.glass}
                      Механизм: ${el.mechanism}
                      Водостойкость: ${el.water}
                      Описание:${el.description}
                      Цена:${el.price} ₽`}
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                          {/* НАПИСАТЬ МОДЕЛИ ЧАСОВ В H4 */}
                          <h4>{`${el.title}`}</h4>
                          <h4>
                            {`${el.price}`}
                            ₽
                          </h4>
                        </div>
                        {/* МАЛЕКНЬКАЯ КАРТИНКА */}
                        <img
                          src={`/img/portfolio/${el.image}`}
                          className="img-responsive"
                          alt={`${el.title}`}
                        />
                        <span>{`${el.category}`}</span>
                      </a>
                    </div>
                  </div>
                </div>
                {
                  (user && user.admin)
                    ? (
                      <ul
                        className="cat"
                        style={{
                          display: 'flex', justifyContent: 'space-around', fontSize: '15px', letterSpacing: '1px',
                        }}
                      >
                        <li className="page-scroll">
                          <a
                            className="page-scroll"
                            href={`watch/${el.id}`}
                          >
                            edit
                          </a>
                        </li>
                        <li className="page-scroll">
                          <a
                            className="page-scroll"
                            delid={`${el.id}`}
                            id="delete"
                            href={`/${el.id}`}
                          >
                            delete
                          </a>
                        </li>
                      </ul>
                    )
                    : <div />
                }
              </div>

            ))}

          
            {/* <div className="col-sm-6 col-md-3 col-lg-3 product"> */}
            {/*   <div className="portfolio-item"> */}
            {/*     <div className="hover-bg"> */}
            {/*       <a */}
            {/*         href="/img/portfolio/02-large.jpg" */}
            {/*         title="Project Title" */}
            {/*         data-lightbox-gallery="gallery1" */}
            {/*       > */}
            {/*         <div className="hover-text"> */}
            {/*           <h4>Project Title</h4> */}
            {/*         </div> */}
            {/*         <img */}
            {/*           src="/img/portfolio/02-small.jpg" */}
            {/*           className="img-responsive" */}
            {/*           alt="Project Title" */}
            {/*         /> */}
            {/*       </a> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="col-sm-6 col-md-3 col-lg-3 web"> */}
            {/*   <div className="portfolio-item"> */}
            {/*     <div className="hover-bg"> */}
            {/*       <a */}
            {/*         href="/img/portfolio/03-large.jpg" */}
            {/*         title="Project Title" */}
            {/*         data-lightbox-gallery="gallery1" */}
            {/*       > */}
            {/*         <div className="hover-text"> */}
            {/*           <h4>Project Title</h4> */}
            {/*         </div> */}
            {/*         <img */}
            {/*           src="/img/portfolio/03-small.jpg" */}
            {/*           className="img-responsive" */}
            {/*           alt="Project Title" */}
            {/*         /> */}
            {/*       </a> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="col-sm-6 col-md-3 col-lg-3 web"> */}
            {/*   <div className="portfolio-item"> */}
            {/*     <div className="hover-bg"> */}
            {/*       <a */}
            {/*         href="/img/portfolio/04-large.jpg" */}
            {/*         title="Project Title" */}
            {/*         data-lightbox-gallery="gallery1" */}
            {/*       > */}
            {/*         <div className="hover-text"> */}
            {/*           <h4>Project Title</h4> */}
            {/*         </div> */}
            {/*         <img */}
            {/*           src="/img/portfolio/04-small.jpg" */}
            {/*           className="img-responsive" */}
            {/*           alt="Project Title" */}
            {/*         /> */}
            {/*       </a> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="col-sm-6 col-md-3 col-lg-3 product"> */}
            {/*   <div className="portfolio-item"> */}
            {/*     <div className="hover-bg"> */}
            {/*       <a */}
            {/*         href="/img/portfolio/05-large.jpg" */}
            {/*         title="Project Title" */}
            {/*         data-lightbox-gallery="gallery1" */}
            {/*       > */}
            {/*         <div className="hover-text"> */}
            {/*           <h4>Project Title</h4> */}
            {/*         </div> */}
            {/*         <img */}
            {/*           src="/img/portfolio/05-small.jpg" */}
            {/*           className="img-responsive" */}
            {/*           alt="Project Title" */}
            {/*         /> */}
            {/*       </a> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="col-sm-6 col-md-3 col-lg-3 photography"> */}
            {/*   <div className="portfolio-item"> */}
            {/*     <div className="hover-bg"> */}
            {/*       <a */}
            {/*         href="/img/portfolio/06-large.jpg" */}
            {/*         title="Project Title" */}
            {/*         data-lightbox-gallery="gallery1" */}
            {/*       > */}
            {/*         <div className="hover-text"> */}
            {/*           <h4>Project Title</h4> */}
            {/*         </div> */}
            {/*         <img */}
            {/*           src="/img/portfolio/06-small.jpg" */}
            {/*           className="img-responsive" */}
            {/*           alt="Project Title" */}
            {/*         /> */}
            {/*       </a> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="col-sm-6 col-md-3 col-lg-3 photography"> */}
            {/*   <div className="portfolio-item"> */}
            {/*     <div className="hover-bg"> */}
            {/*       <a */}
            {/*         href="/img/portfolio/07-large.jpg" */}
            {/*         title="Project Title" */}
            {/*         data-lightbox-gallery="gallery1" */}
            {/*       > */}
            {/*         <div className="hover-text"> */}
            {/*           <h4>Project Title</h4> */}
            {/*         </div> */}
            {/*         <img */}
            {/*           src="/img/portfolio/07-small.jpg" */}
            {/*           className="img-responsive" */}
            {/*           alt="Project Title" */}
            {/*         /> */}
            {/*       </a> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="col-sm-6 col-md-3 col-lg-3 web"> */}
            {/*   <div className="portfolio-item"> */}
            {/*     <div className="hover-bg"> */}
            {/*       <a */}
            {/*         href="/img/portfolio/08-large.jpg" */}
            {/*         title="Project Title" */}
            {/*         data-lightbox-gallery="gallery1" */}
            {/*       > */}
            {/*         <div className="hover-text"> */}
            {/*           <h4>Project Title</h4> */}
            {/*         </div> */}
            {/*         <img */}
            {/*           src="/img/portfolio/08-small.jpg" */}
            {/*           className="img-responsive" */}
            {/*           alt="Project Title" */}
            {/*         /> */}
            {/*       </a> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="col-sm-6 col-md-3 col-lg-3 product"> */}
            {/*   <div className="portfolio-item"> */}
            {/*     <div className="hover-bg"> */}
            {/*       <a */}
            {/*         href="/img/portfolio/09-large.jpg" */}
            {/*         title="Project Title" */}
            {/*         data-lightbox-gallery="gallery1" */}
            {/*       > */}
            {/*         <div className="hover-text"> */}
            {/*           <h4>Project Title</h4> */}
            {/*         </div> */}
            {/*         <img */}
            {/*           src="/img/portfolio/09-small.jpg" */}
            {/*           className="img-responsive" */}
            {/*           alt="Project Title" */}
            {/*         /> */}
            {/*       </a> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="col-sm-6 col-md-3 col-lg-3 photography"> */}
            {/*   <div className="portfolio-item"> */}
            {/*     <div className="hover-bg"> */}
            {/*       <a */}
            {/*         href="/img/portfolio/10-large.jpg" */}
            {/*         title="Project Title" */}
            {/*         data-lightbox-gallery="gallery1" */}
            {/*       > */}
            {/*         <div className="hover-text"> */}
            {/*           <h4>Project Title</h4> */}
            {/*         </div> */}
            {/*         <img */}
            {/*           src="/img/portfolio/10-small.jpg" */}
            {/*           className="img-responsive" */}
            {/*           alt="Project Title" */}
            {/*         /> */}
            {/*       </a> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="col-sm-6 col-md-3 col-lg-3 photography"> */}
            {/*   <div className="portfolio-item"> */}
            {/*     <div className="hover-bg"> */}
            {/*       <a */}
            {/*         href="/img/portfolio/11-large.jpg" */}
            {/*         title="Project Title" */}
            {/*         data-lightbox-gallery="gallery1" */}
            {/*       > */}
            {/*         <div className="hover-text"> */}
            {/*           <h4>Project Title</h4> */}
            {/*         </div> */}
            {/*         <img */}
            {/*           src="/img/portfolio/11-small.jpg" */}
            {/*           className="img-responsive" */}
            {/*           alt="Project Title" */}
            {/*         /> */}
            {/*       </a> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <div className="col-sm-6 col-md-3 col-lg-3 web"> */}
            {/*   <div className="portfolio-item"> */}
            {/*     <div className="hover-bg"> */}
            {/*       <a */}
            {/*         href="/img/portfolio/12-large.jpg" */}
            {/*         title="Project Title" */}
            {/*         data-lightbox-gallery="gallery1" */}
            {/*       > */}
            {/*         <div className="hover-text"> */}
            {/*           <h4>Project Title</h4> */}
            {/*         </div> */}
            {/*         <img */}
            {/*           src="/img/portfolio/12-small.jpg" */}
            {/*           className="img-responsive" */}
            {/*           alt="Project Title" */}
            {/*         /> */}
            {/*       </a> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
            {/* <Watch /> */}
            {/* </div> */}
          </div>
          <div className="text-center center">
              <h3>
                <a href="" className="btn btn-custom btn-lg page-scroll" data-toggle="modal" data-target="#modalOrderForm">
                  Add watches
                </a>

              </h3>

            </div>
        </div>
      </div>
    </div>
  );
};
