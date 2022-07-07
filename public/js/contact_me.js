$(() => {
  $('input,textarea').jqBootstrapValidation({
    preventSubmit: true,
    submitError($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      const name = $('input#name').val();
      const email = $('input#email').val();
      const message = $('textarea#message').val();
      let firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $.ajax({
        url: '././mail/contact_me.php',
        type: 'POST',
        data: {
          name,
          email,
          message,
        },
        cache: false,
        success() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append('</button>');
          $('#success > .alert-success')
            .append('<strong>Your message has been sent. </strong>');
          $('#success > .alert-success')
            .append('</div>');

          // clear all fields
          $('#contactForm').trigger('reset');
        },
        error() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append('</button>');
          $('#success > .alert-danger').append(`<strong>Sorry ${firstName}, it seems that my mail server is not responding. Please try again later!`);
          $('#success > .alert-danger').append('</div>');
          // clear all fields
          $('#contactForm').trigger('reset');
        },
      });
    },
    filter() {
      return $(this).is(':visible');
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
});

/* When clicking on Full hide fail/success boxes */
$('#name').focus(() => {
  $('#success').html('');
});
