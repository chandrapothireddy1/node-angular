$(document).ajaxStart(function() {
    $("#overlay").show();
});

$(document).ajaxStop(function() {
    $("#overlay").hide();
});



$('#mobileNumber').bind("cut copy paste", function(e) {
    e.preventDefault();
});


$("#username").keyup(function() {
    namevalidation();
});
$("#email").keyup(function() {
    emailvalidation();
});
$("#mobileNumber").keyup(function() {
    if ($("#mobileNumber").val() == '' || $("#mobileNumber").val() == null) {
        $("#greaterthan10error").hide();
        return;
    }

    if ($("#mobileNumber").val().length != 10) {
        $("#mobilenumbererror").hide();
        return;
    }
});
$("#question").keyup(function() {
    if ($("#question").val() != null) {
        $("#questionspan").hide();
    }
});

$("#subject").keyup(function() {
    if ($("#subject").val() != null) {
        $("#subjectspan").hide();
    }
});

function namevalidation() {

    var username = document.getElementById("username");
    var letters = /^\w[A-Za-z. ]+$/;
    if (username.value == null || username.value == '') {
        $('#user').hide();
        $('#firstletter').hide();
        $('#space').hide();
        $('#notnull').show();
        $('#spaceError').hide();
        /*  $('#user').focus(); */
        return false;
    } else if (username.value.charAt(0) == ' ' || username.value.charAt(0) == '.') {
        $('#user').hide();
        $('#notnull').hide();
        $('#space').hide();
        $('#firstletter').show();
        $('#spaceError').hide();
        return false;
    } else if (username.value.indexOf('.') > -1) {
        $('#user').show();
        $('#spaceError').hide();
        return false;
    } else if (!/^[a-zA-Z ]*$/g.test(username.value)) {

        $('#spaceError').hide();
        $('#user').show();
        $('#firstletter').hide();
        $('#notnull').hide();
        $('#space').hide();
        /* document.register.email.focus();   */
        return false;

    } else if (username.value.indexOf('  ') >= 0) {
        $('#notnull').hide();
        $('#firstletter').hide();
        $('#space').hide();
        $('#user').hide();
        $('#spaceError').show();
        return false;

    } else {
        /*  $('#username').after('<span style="color:red" id="user">valid name </span>');
    	 	    proceed = false; */
        $('#notnull').hide();
        $('#spaceError').hide();
        $('#firstletter').hide();
        $('#space').hide();
        $('#user').hide();
        /* username.focus();   */
        return true;
    }
}

function emailvalidation() {

    var emailid = document.getElementById("email");

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailid.value.match(mailformat)) {
        $('#emailid').hide();
        $('#emptyemail').hide();

        /* document.register.password.focus();   */
        return true;
    } else if (emailid.value == '') {
        $('#emailid').hide();
        $('#emptyemail').show();

        /* emailid.focus(); */
        return false;
    } else {
        $('#emptyemail').hide();
        $('#emailid').show();
        return false;
    }
}

$("#mobileNumber").blur(function() {
    if ($("#mobileNumber").val() == '' || $("#mobileNumber").val() == null) {
        $("#greaterthan10error").hide();
        $("#mobilenumbererror").show();
        return;
    }

    if ($("#mobileNumber").val().length != 10) {
        $("#mobilenumbererror").hide();
        $("#greaterthan10error").show();
        return;
    }
});

function isNumber(e) {

    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        return false;
    }
}

$("#submit").click(function() {
    /* $("#overlay").show(); */
    var name = namevalidation();
    var email = emailvalidation();
    var mandatoryflag = 0;
    console.log("name : " + name);
    console.log("email : " + email);
    if (name == false) {
        mandatoryflag = 1;
        //event.preventDefault();
    }

    if (email == false) {
        mandatoryflag = 1;
        //event.preventDefault();
    }
    if ($("#subject").val() == null || $("#subject").val() == '') {
        mandatoryflag = 1;
        //event.preventDefault();
        /*   $("#questionspan").hide(); */
        $("#subjectspan").show();
    }
    if ($("#question").val() == null || $("#question").val() == '') {
        mandatoryflag = 1;
        //event.preventDefault();
        /*  $("#subjectspan").hide(); */
        $("#questionspan").show();
    }
    if ($("#mobileNumber").val() == '' || $("#mobileNumber").val() == null) {
        mandatoryflag = 1;
        //event.preventDefault();
        $("#typespan").hide();
        $("#greaterthan10error").hide();
        $("#mobilenumbererror").show();
        //return ;
    }
    if ($("#mobileNumber").val().length != 10) {
        mandatoryflag = 1;
        //event.preventDefault();
        $("#typespan").hide();
        $("#mobilenumbererror").hide();
        $("#greaterthan10error").show();
        //return ;
    }
    if ($("#type option:selected").val() == null || $("#type option:selected").val() == '') {
        mandatoryflag = 1;
        //event.preventDefault();
        $("#mobilenumbererror").hide();
        $("#greaterthan10error").hide();
        $("#typespan").show();
        //return ;
    }
    if (mandatoryflag == 1) {
        event.preventDefault();
    } else {
        var formData = $("#triggerform").serialize();
        att = $("#triggerform").attr("action");
        $.post(att, formData).done(function(response) {

            $("#overlay").hide();
            $('#CheckConfirm').modal('show');
        });
    }

});