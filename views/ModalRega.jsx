const React = require('react');

module.exports = function ModalRega() {
  return (
    <div>
        <form name="registration">
      <div
        className="modal fade"
        id="modalLoginForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Registration</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
                
              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text" />
                <input type="text" id="orangeForm-name" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="orangeForm-name" name="inputename">Your name</label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text" />
                <input type="email" id="defaultForm-email" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="defaultForm-email" name="inputemail">Your email</label>
              </div>

              <div className="md-form mb-4">
                <i className="fas fa-lock prefix grey-text" />
                <input type="password" id="defaultForm-pass" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="defaultForm-pass" name="inputpassword">Your password</label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text" />
                <input type="text" id="orangeForm-name2" className="form-control validate" />
                <label data-error="wrong" data-success="right" htmlFor="orangeForm-name" name="inputepromo">Admin code</label>
              </div>

            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-default" type="submit" id="button1">Register</button>
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
