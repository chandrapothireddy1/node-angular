$("#username").val(""), $("#password").val(""), $("#mobileNumber").val(""), $("#email").val(""), $("#email1").val(""), $("#lbl-ser-err-del").hide(), $("#lbl-ser-err").hide(), $("#lbl-ser-err-other").hide(), $("#lbl-ser-err-othersubmit").hide();
var taborMob = 0;
(isMobileload = {
    Android: function() {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function() {
        return isMobileload.Android() || isMobileload.BlackBerry() || isMobileload.iOS() || isMobileload.Opera() || isMobileload.Windows()
    }
}).any() && (taborMob = 1, $("#divemail1").addClass("tooltipemail"), $("#divmob").addClass("tooltipmob"), $("#divpass").addClass("tooltippass"), $("#divtandc").addClass("tooltiptandc"), $("#email1").addClass("tooltipemail"));
var width1 = $(window).width();
width1 < 768 ? $("#registerfrom").val("Mobile Site") : $("#registerfrom").val("Desktop"), $("#submitbutton").click(function() {
    $(window).width() < 768 ? $("#registerfrom").val("Mobile Site") : $("#registerfrom").val("Desktop");
    
    var t = $("#countryId").val(),
	    o = 0;
	"" == $("#username").val() && (1 == taborMob ? $("#username").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#username").closest('.form-group')
	}).tooltip("show") : $("#username").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#username").closest('.form-group')
	}).tooltip("show"), o = 1);
	
	var profilecreatedfor = $("#profilecreatedfor").val();
	"" == $("#profilecreatedfor").val() && (1 == taborMob ? $("#profilecreatedfor").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#profilecreatedfor").closest('.form-group')
	}).tooltip("show") : $("#profilecreatedfor").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#profilecreatedfor").closest('.form-group')
	}).tooltip("show"), t = 1);
	
	var mothertongue = $("#mothertongue").val();
	"" == $("#mothertongue").val() && (1 == taborMob ? $("#mothertongue").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#mothertongue").closest('.form-group')
	}).tooltip("show") : $("#mothertongue").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#mothertongue").closest('.form-group')
	}).tooltip("show"), t = 1);
	
	var religion = $("#religion").val();
	"" == $("#religion").val() && (1 == taborMob ? $("#religion").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#religion").closest('.form-group')
	}).tooltip("show") : $("#religion").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#religion").closest('.form-group')
	}).tooltip("show"), t = 1);

var caste = $("#caste").val();
	"" == $("#caste").val() && (1 == taborMob ? $("#caste").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#caste").closest('.form-group')
	}).tooltip("show") : $("#caste").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#caste").closest('.form-group')
	}).tooltip("show"), t = 1);
	
	var gender = $("#gender").val();
	"" == $("#gender").val() && (1 == taborMob ? $("#gender").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#gender").closest('.form-group')
	}).tooltip("show") : $("#gender").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#gender").closest('.form-group')
	}).tooltip("show"), t = 1);

	var e = passwordvalidation();
	console.log("For Password : " + e), 1 == e && (1 == taborMob ? $("#password").tooltip({
	    placement: "top",
	    trigger: "manual",
	    container: $("#password").closest('.form-group')
	}).tooltip("show") : $("#password").tooltip({
	    placement: "bottom",
	    trigger: "manual",
	    container: $("#password").closest('.form-group')
	}).tooltip("show"), o = 1);
	var a = emailvalidation();
    console.log("For Email : " + a), 1 == a && (1 == taborMob ? $("#email").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#email").closest('.form-group')
    }).tooltip("show") : $("#email").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#email").closest('.form-group')
    }).tooltip("show"), o = 1);
    var i = document.getElementById("mobileNumber").value.toString().length;
    console.log("For Mobile : " + i), "0" == $("#mobileNumber").val().charAt("0") && (1 == taborMob ? $("#mobileNumber").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show") : $("#mobileNumber").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show"), o = 1), "499" == t ? 10 != i && (1 == taborMob ? $("#mobileNumber").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show") : $("#mobileNumber").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show"), o = 1) : (0 == i || i > 20) && (1 == taborMob ? $("#mobileNumber").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show") : $("#mobileNumber").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#mobileNumber").closest('.form-group')
    }).tooltip("show"), o = 1), 0 == $("#term").prop("checked") && (1 == taborMob ? $("#term").attr("title", "Please Agree to the Terms and Conditions").tooltip({
        placement: "right",
        trigger: "manual",
	    container: $("#term").closest('.form-group')
    }).tooltip("show") : $("#term").attr("title", "Please Agree to the Terms and Conditions").tooltip({
        placement: "left",
        trigger: "manual",
	    container: $("#term").closest('.form-group')
    }).tooltip("show"), o = 1), 1 != o && checkingreplymessage()
}), $("#term").click(function() {
    0 != $("#term").prop("checked") && $("#term").tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide")
}), $("#email").keyup(function(t) {
    mobiletabflag = 0, 1 == emailvalidation() ? 1 == taborMob ? $(this).tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#email").closest('.form-group')
    }).tooltip("show") : $(this).tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#email").closest('.form-group')
    }).tooltip("show") : $(this).tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#email").closest('.form-group')
    }).tooltip("hide")
});
var mobiletabflag = 0;
$("#mobileNumber").keypress(function(t) {
    console.log("Tab is clicked"), mobiletabflag = 1;
    var o = t.which;
    return (o > 46 && o < 58 || 8 == o) && (console.log(t.which), !0)
}), $("#mobileNumber").on("keyup", function() {
    console.log(this.value.length), "499" == $("#countryId").val() ? 10 == this.value.length && $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide") : this.value.length > 0 ? $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide") : $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("show")
}), $("#password").keypress(function(t) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide")
});
var usernameflag = 0;

function emailvalidation() {
    var t = document.getElementById("email").value;
    console.log("ev : " + t);
    var o = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    console.log("Subasri : " + o.test(document.getElementById("email").value));
    var e = 1;
    return 1 == o.test(document.getElementById("email").value) && (e = 0), e
}

function passwordvalidation() {
    var t = document.getElementById("password").value.toString().length;
    return t < 8 || t > 15 ? 1 : 0
}

function checkingreplymessage() {
    var t = new FormData;
    t.append("mobilenumber", $("#mobileNumber").val()), jQuery.ajax({
        url: "getPhoneNumberStatusUser",
        data: t,
        dataType: "text",
        processData: !1,
        async: "false",
        contentType: !1,
        type: "POST",
        success: function(t) {
            if (marker = JSON.stringify(t), json = jQuery.parseJSON(marker), json = JSON.parse(json), "having" == json.mobilestatus) {
                console.log("Anto");
                $("#mobileNumber").attr("data-original-title", "Mobile Number Already Exists").tooltip("show")
            } else if ("no" == json.mobilestatus) {
                var o = $("#email").val(),
                    e = new FormData;
                e.append("emailId", o), checkreply(e, "/loginAuth/email")
            }
        }
    })
}
$("#username").keypress(function(t) {
    mobiletabflag = 0, usernameflag = 1;
    var o = t.which;
    return $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide"), console.log(o), (o > 64 && o < 91 || o > 96 && o < 123 || 8 == o || 46 == o || 32 == o) && (32 == o ? 0 != $(this).val().length && (0 == flag && (flag = 1, !0)) : (flag = 0, !0))
}), $(document).on("keyup", "#username", function(t) {
    var o = t.which;
    console.log("Key Up : " + o), 9 == o && 1 == usernameflag && $('select[name="profileForId"]').focus()
});
$("#mobileNumber").on("keydown",function(e) {
	   var t = e.which;
	    if(t == 9){
	    	e.preventDefault();
	    	$('input[name="email"]').focus();
	    	
	}
});

$("#profilecreatedfor").change(function(e) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide");
    if($(this).val() == 2 || $(this).val() == 4){
    	$('#gender').val('M');
    	$('#gender').addClass('isdisabled');
    	$('#gender').tooltip({
            placement: "bottom",
            trigger: "manual"
        }).tooltip("hide");
    } else if($(this).val() == 3 || $(this).val() == 5) {
    	$('#gender').val('F');
    	$('#gender').addClass('isdisabled');
    	$('#gender').tooltip({
            placement: "bottom",
            trigger: "manual"
        }).tooltip("hide");
    }
    else
    {
    	$('#gender').removeClass('isdisabled');
    }
});

$("#mothertongue").change(function(e) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide");
});
$("#religion").change(function(e) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide");
});

$("#caste").change(function(e) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide");
});
$("#gender").change(function(e) {
    $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide");
});

var submitform = 0;

function checkreply(t, o) {
    jQuery.ajax({
        url: o,
        data: t,
        dataType: "text",
        processData: !1,
        contentType: !1,
        type: "POST",
        success: function(t) {
            if (marker = JSON.stringify(t), json = jQuery.parseJSON(marker), json = JSON.parse(json), "SUCCESS" == json.status) {
                console.log("Anto");
                $("#email").attr("data-original-title", "e-mail ID Already Exists").tooltip("show")
            } else "anotheruserloggedin" == json.status ? $("#lbl-ser-err-othersubmit").show() : 0 == submitform && (submitform += 1, $("#overlay").show(), $("#submitbuttondummy").click())
        }
    })
}
$("#username").val(""), $("#password").val(""), $("#mobileNumber").val(""), $("#email").val(""), $("#email1").val(""), $("#loginpwd").val("");
var isMobileload;
taborMob = 0;

function emailvalidation1() {
    var t = document.getElementById("email1").value;
    console.log("ev : " + t);
    var o = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    console.log("Subasri : " + o.test(document.getElementById("email1").value));
    var e = 1;
    return 1 == o.test(document.getElementById("email1").value) && (e = 0), console.log("emailflag " + e), e
}(isMobileload = {
    Android: function() {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function() {
        return isMobileload.Android() || isMobileload.BlackBerry() || isMobileload.iOS() || isMobileload.Opera() || isMobileload.Windows()
    }
}).any() && (taborMob = 1, $("#divemail1").addClass("tooltipemail"), $("#divmob").addClass("tooltipmob"), $("#divpass").addClass("tooltippass"), $("#divtandc").addClass("tooltiptandc"), $("#email1").addClass("tooltipemail"), $("#divpasslogin").addClass("tooltippass")), $("#submitlogin").click(function() {
    
    var t = 0,
        o = emailvalidation1();
    console.log("For Email login : " + o), 1 == o && (1 == taborMob ? $("#email1").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#email1").closest('.form-group')
    }).tooltip("show") : $("#email1").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#email1").closest('.form-group')
    }).tooltip("show"), t = 1), "" == $("#loginpwd").val() && (console.log("loginpwd"), 1 == taborMob ? $("#loginpwd").tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#loginpwd").closest('.form-group')
    }).tooltip("show") : $("#loginpwd").tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#loginpwd").closest('.form-group')
    }).tooltip("show"), t = 1), 1 != t && $("#submitlogindummy").click()
}), $("#email1").keyup(function(t) {
    console.log("hai"), mobiletabflag = 0, 1 == emailvalidation1() ? 1 == taborMob ? $(this).tooltip({
        placement: "top",
        trigger: "manual",
	    container: $("#email1").closest('.form-group')
    }).tooltip("show") : $(this).tooltip({
        placement: "bottom",
        trigger: "manual",
	    container: $("#email1").closest('.form-group')
    }).tooltip("show") : $(this).tooltip({
        placement: "bottom",
        trigger: "manual"
    }).tooltip("hide")
});
var suspensionreason = "";

function myforget() {
    var t = $("#forgetform").serialize();
    att = $("#forgetform").attr("action"), $.get(att, t).done(function() {
        $("#buttonhideforget").click(), $("#btnCloseForgotPass").click()
    })
}
$("#loginform").submit(function(t) {
    t.preventDefault()
}), $("#loginform").submit(function(t) {
    var o = this,
        e = new FormData;
    e.append("email", $("#email1").val()), e.append("password", $("#loginpwd").val()), jQuery.ajax({
        url: "/loginAuth/campaignuser",
        data: e,
        dataType: "text",
        processData: !1,
        contentType: !1,
        type: "POST",
        success: function(e) {
            marker = JSON.stringify(e), json = jQuery.parseJSON(marker), json = JSON.parse(json), "SUCCESS" == json.status ? o.submit() : "delete" == json.status ? (t.preventDefault(), $("#lbl-ser-err-del").show(), $("#lbl-ser-err").hide()) : "suspension" == json.status ? (suspensionreason = json.suspensionreasonspan, $("#suspensionreasontd").text(suspensionreason), $("#suspensionmodal").modal("show")) : "failure" == json.status ? (t.preventDefault(), $("#lbl-ser-err-del").hide(), $("#lbl-ser-err").show()) : "anotheruserloggedin" == json.status && (t.preventDefault(), $("#lbl-ser-err-del").hide(), $("#lbl-ser-err").hide(), $("#lbl-ser-err-other").show())
        }
    })
}), $("#btncontinue").click(function() {
    var t = new FormData,
        o = $("#forgetusername").val();
    o ? (t.append("emailId", o), jQuery.ajax({
        url: "/loginAuth/email",
        data: t,
        dataType: "text",
        processData: !1,
        contentType: !1,
        type: "POST",
        success: function(t) {
            return marker = JSON.stringify(t), json = jQuery.parseJSON(marker), json = JSON.parse(json), "SUCCESS" != json.deletestatus ? "SUCCESS" != json.status ? $("#forgetspan").show() : myforget() : $("#forgetdelete").show()
        }
    })) : $("#forgetspan").show()
}), $("#btnCloseForgotPass").click(function() {
    $("#forgetspan").hide()
});

jQuery("select#religion.profilereligion")
.change(
        function() {
        	var oMyForm = new FormData();
            oMyForm.append('profilemothertongueId', $('#mothertongue option:selected').val());
            oMyForm.append('profilereligionId', $('#religion option:selected').val());
         	 getcasteOptions('profilecaste', "#caste",
                  oMyForm, '/loginAuth/caste');
         	

        });
jQuery("select#mothertongue.profileMotherTongue").change(
function() {
	  	var oMyForm = new FormData();
        oMyForm.append('profilemothertongueId', $('#mothertongue option:selected').val());
        oMyForm.append('profilereligionId', $('#religion option:selected').val());
     	 getcasteOptions('profilecaste', "#caste",
              oMyForm, '/loginAuth/caste');
      
	
}); 
function getcasteOptions(type, selector, oMyForm, controllerUrl)
{

    oMyForm.append('type', type);
    jQuery
            .ajax({
                url : controllerUrl,
                data : oMyForm,
                dataType : 'text',
                processData : false,
                contentType : false,
                type : 'POST',
                success : function(response) 
                {
                	if(response=="900")
                		{
                		 window.location.href="/";
                		}
                	else
                		{
                    marker = JSON.stringify(response);
                    json = jQuery.parseJSON(marker);
                    json = JSON.parse(json);
                    var options = json.options;
                    var html = "";

                    
                       var statoption = 0;
                       if(options!=null&&options.length>=1)
                    	   {
                       /*  html += '<option style="color:white"></option>';  */
                    	   html+= "<option value='' class='hide'>Select Caste</option>";
                    	   }
                    if (json.status=="SUCCESS") {                        
                        
                        

                            
                          
                    
                        if(options.length>=1){
                        for ( var i in options) {
                        	
                       

                         html += "<option value="+ options[i].id+">"
                                    + options[i].name + "</option>";
                      
                        		
                        }
                        
							/* jQuery(selector).html(html); */
							$(selector).empty().append(html);
							$(selector).trigger("chosen:updated");
                        
                      
                        }else{
                        	 for ( var i in options) {
                        		
	 
                        	html += "<option value="+ options[i].id+">"
                            + options[i].name + "</option>";
                            
                            		}
                        	 
                        		$(selector).empty().append(html);
      							$(selector).trigger("chosen:updated");
                        }
            
                        
                        ////alert(html);
                      
                        //jQuery(selector).selectpicker("refresh");
                    } else if(json.status=="FAILURE"){
                    	  
                          	
                        	$(selector).empty().append("");
  							$(selector).trigger("chosen:updated");
                          
                    }
                    
                   
    			        }
                	}
                });
            
            
        	
            }