const React = require('react');

module.exports = function ModalWatches() {
  return (
    <div>
        <form name="orderwatches">
      <div
        className="modal fade"
        id="modalOrderForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Add watches</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
                
              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text" />
                <input type="text" id="title" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="orangeForm-name" name="title">Title</label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text" />
                <input type="text" id="category" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="defaultForm-email" name="category">Category</label>
              </div>

              <div className="md-form mb-4">
                <i className="fas fa-lock prefix grey-text" />
                <input type="text" id="case" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass" name="case">Case</label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text" />
                <input type="text" id="strap" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="orangeForm-name" name="strap">Strap</label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text" />
                <input type="text" id="glass" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="orangeForm-name" name="strap">Glass</label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text" />
                <input type="text" id="mechanism" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="orangeForm-name" name="mechanism">Mechanism</label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text" />
                <input type="text" id="water" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="orangeForm-name" name="water">Waterproof</label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text" />
                <input type="text" id="description" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="orangeForm-name" name="description">Description</label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text" />
                <input type="text" id="price" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="orangeForm-name" name="price">Price</label>
              </div>

            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-default" type="submit" id="button1">Add watches</button>
            </div>
          </div>
        </div>
      </div>
      </form>

      {/* <div className="text-center">
        <a href="" className="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">
          Launch
          Modal Login Form

        </a>
      </div> */}
    </div>

  );
};
