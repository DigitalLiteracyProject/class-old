$(function(){

    // tooltips
    $('.show-icon').tooltip();
    $('.delete-icon').tooltip();

    // BEGIN SESSION EDITOR
    // $("#add-module").click(function(){
    //   alert('hi');
    //   $("#modules-container").append("
    //     <h2>New Module</h2>
    //     <select class="form-control">
    //       <option>Code Module</option>
    //       <option>Assessment Module</option>
    //       <option>Lecture Module</option>
    //     </select>
    //     <input type="text" placeholder="Module Title"/>
    //   ");
    // });
    // END SESSION EDITOR

    // BEGIN ATTENTION TRACKING
    if(top.location.pathname === '/test/attention'){
      $.idleTimer(3000);
      var title = document.title;

      // When the student is no longer paying attention...
      $(document).on("idle.idleTimer", function(event, elem, obj){
        console.log('Student is not paying attention');
        $("#attention-test").html('Student is not paying attention').removeClass("alert-success").addClass("alert-danger");
        document.title = "Pay attention!";
      });

      // When the student is paying attention again!
      $(document).on("active.idleTimer", function(event, elem, obj, triggerevent){
        console.log('Student is paying attention again!');
        $("#attention-test").html('Student is paying attention again!').removeClass("alert-danger").addClass("alert-success");
        document.title = title;
      });
    }

    // END ATTENTION TRACKING



    // BEGIN SIGNPU FORM VALIDATION

    // On keyup of the second password field, validate
    flashSignupValidationError = function(text){
      $("#signup-validation-warning").html(text).show();
    };

    // Make the password fields red if the passwords do not match while typing
    $("#password-2").keyup(function(){
      console.log('up');
      var password1 = $("#password-1").val();
      var password2 = $("#password-2").val();
      if(password1 !== password2){
        $("#password-1-formgroup").addClass('has-error');
        $("#password-2-formgroup").addClass('has-error');
      } else {
        $("#password-1-formgroup").removeClass('has-error');
        $("#password-2-formgroup").removeClass('has-error');
      }
    });

    // Don't allow submit to be clicked unless the passwords match, flash a warning if they don't
    $("#signup-button").click(function(){
      var validationError = false;
      var password1 = $("#password-1").val();
      var password2 = $("#password-2").val();
      if(password1 !== password2){
        $("#signup-validation-warning").html('Passwords do not match!').removeClass('hidden');
        return false;
      } else {
        $("#signup-validation-warning").html('').addClass('hidden');
      }
    });

    // END SIGNUP FORM VALIDATION

    // BEGIN CLASSROOM EDITOR
    // $('#classroom-configure-button').click(function(){
    //   $.ajax({
    //     type: 'put',
    //     url: 
    //   })
    //   return false;
    // });

    // END CLASSROOM EDITOR

    // autosave interval
    var autosave_interval = 1000;

    // Render ace editor for HTML editor
    var html_editor = ace.edit("html-editor");
    html_editor.setTheme("ace/theme/solarized_dark");
    html_editor.getSession().setMode("ace/mode/html");

    function updateHTMLOutput(){
        var $frame = $('#html-output');
        $('div#right-panel').html( $frame );
        var doc = $frame[0].contentWindow.document;
        var $html = $('html',doc);
        $html.html(html_editor.getValue());
        console.log('Updated');
    }

    // render the HTML output once upon loading the page
    updateHTMLOutput();

    // then update the HTML output every time the input is changed
    html_editor.getSession().on('change', function(e){
        console.log(e);
        updateHTMLOutput();
    });

    // set the intial save cache for more efficient autosave
    var saveCache = html_editor.getValue();

    // checks if the program has changed (by checking agianst cache)
    // if it has changed, then update with socket magic!
    function autosave(){
        if(html_editor.getValue() == saveCache){
            return;
        } else {
            saveCache = html_editor.getValue();
            socket.put('/save/' + saveID, {program: html_editor.getValue()}, function(response){
                // console.log(response);
            });
        }
    }

    setInterval(autosave, autosave_interval);

    // socket testing
    socket.on('news', function(data){
        console.log('data');
        socket.emit('other-event', {my: 'data'});
    });
});