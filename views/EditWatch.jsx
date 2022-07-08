const React = require('react');

module.exports = function EditWatch() {
  return (
    <div>
      <form name="Edit">
        <div
          className="modal fade"
          id="modalEditWatch"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Edit Watch</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mx-3">

                <div className="md-form mb-5">
                  <i className="fas fa-user prefix grey-text" />
                  <input type="text" id="orangeForm-title" className="form-control validate" name="inputetitle" />
                  <label data-error="wrong" data-success="right" htmlFor="orangeForm-title">Title</label>
                </div>

                <div className="md-form mb-5">
                  <i className="fas fa-envelope prefix grey-text" />
                  <input type="text" id="defaultForm-category" className="form-control validate" name="inputecategory" />
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-category">Category</label>
                </div>

                <div className="md-form mb-5">
                  <i className="fas fa-lock prefix grey-text" />
                  <input type="text" id="defaultForm-case" className="form-control validate" name="inputecase" />
                  <label data-error="wrong" data-success="right" htmlFor="defaultForm-case">Case</label>
                </div>

                <div className="md-form mb-5">
                  <i className="fas fa-user prefix grey-text" />
                  <input type="text" id="orangeForm-strap" className="form-control validate" name="inputestrap" />
                  <label data-error="wrong" data-success="right" htmlFor="orangeForm-strap">Strap</label>
                </div>

                <div className="md-form mb-5">
                  <i className="fas fa-user prefix grey-text" />
                  <input type="text" id="orangeForm-glass" className="form-control validate class" name="inputeglass" />
                  <label data-error="wrong" data-success="right" htmlFor="orangeForm-glass">Glass</label>
                </div>

                <div className="md-form mb-5">
                  <i className="fas fa-user prefix grey-text" />
                  <input type="text" id="orangeForm-mechanism" className="form-control validate" name="inputemechanism" />
                  <label data-error="wrong" data-success="right" htmlFor="orangeForm-mechanism">Mechanism</label>
                </div>

                <div className="md-form mb-5">
                  <i className="fas fa-user prefix grey-text" />
                  <input type="text" id="orangeForm-water" className="form-control validate" name="inputewater" />
                  <label data-error="wrong" data-success="right" htmlFor="orangeForm-water">Water</label>
                </div>

                <div className="md-form mb-5">
                  <i className="fas fa-user prefix grey-text" />
                  <input type="text" id="orangeForm-description" className="form-control validate" name="inputedescription" />
                  <label data-error="wrong" data-success="right" htmlFor="orangeForm-description">Description</label>
                </div>

                <div className="md-form mb-5">
                  <i className="fas fa-user prefix grey-text" />
                  <input type="text" id="orangeForm-price" className="form-control validate" name="inputeprice" />
                  <label data-error="wrong" data-success="right" htmlFor="orangeForm-price">Price</label>
                </div>

              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-default" type="submit" id="button3">Accept</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
