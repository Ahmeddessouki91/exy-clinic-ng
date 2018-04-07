$(function () {
    $(window).resize(function () {
        $('body').height($(window).height());
        $('body').width($(window).width());
        $('.login').css('margin-top', ($(window).height() - $('.login').height()) / 2);
    });

    $('body').height($(window).height());
    $('body').width($(window).width());


    $('input[type="email"]').on('focusout', function () {
        if ($(this).val() != '') {
            $(".logAcc .logEmail input + lable").addClass('hasData');
        } else {
            $(".logAcc .logEmail input + lable").removeClass('hasData');
        }
    });

    $('input[type="password"]').on('focusout', function () {
        if ($(this).val() != '') {
            $(".logAcc .logPass input + lable").addClass('hasData');
        } else {
            $(".logAcc .logPass input + lable").removeClass('hasData');
        }
    });



    // ------ signUp -----------
    $('.Fname input[type="text"]').on('focusout', function () {
        if ($(this).val() != '') {
            $(".Fname input + lable").addClass('hasData');
        } else {
            $(".Fname input + lable").removeClass('hasData');
        }
    });

    $('.Lname input[type="text"]').on('focusout', function () {
        if ($(this).val() != '') {
            $(".Lname input + lable").addClass('hasData');
        } else {
            $(".Lname input + lable").removeClass('hasData');
        }
    });

    $('input[type="email"]').on('focusout', function () {
        if ($(this).val() != '') {
            $(".signAcc .signEmail input + lable").addClass('hasData');
        } else {
            $(".signAcc .signEmail input + lable").removeClass('hasData');
        }
    });

    $('input[type="password"]').on('focusout', function () {
        if ($(this).val() != '') {
            $(".signAcc .signPass input + lable").addClass('hasData');
        } else {
            $(".signAcc .signPass input + lable").removeClass('hasData');
        }
    });
    $('input[type="tel"]').on('focusout', function () {
        if ($(this).val() != '') {
            $(".signAcc .signMob input + lable").addClass('hasData');
        } else {
            $(".signAcc .signMob input + lable").removeClass('hasData');
        }
    });



    $('.sign-btn').on('click', function () {

        if ($('input').val() == "") {

        }
    });
    //$('.valid').removeClass('hide')
    $('.login').css('margin-top', ($(window).height() - $('.login').height()) / 2);



    // ----------- Swich Forms -------------

    $('#haveNoAcc').click(function () {
        $('.form-sign').removeClass('hide');
        $('.form-login').addClass('hide');
    });
    $('#haveAcc').click(function () {
        $('.form-login').removeClass('hide');
        $('.form-sign').addClass('hide');
    });

    //        $('#haveNoAcc').click(function () {
    //            $('.form-sign').show(500);
    //            $('.form-login').hide(500);
    //        });
    //        $('#haveAcc').click(function () {
    //            $('.form-login').show(500);
    //            $('.form-sign').hide(500);
    //        });



    //----------- Validation ------------


    $("#SignupForm").validate({
        errorElement: "em",
        rules: {
            Fname: "required",
            signEmail: "required",
            signPass: {
						required: true,
						minlength: 8
					},
            tel: {
						required: true,
						minlength: 11
					},
            termsOfUse: "required"
        },
        messages: {
            Fname: "This field is required!",
            Signemail: "Please enter a valid email address!",
            signPass: {
						required: "Please enter a Password",
						minlength: "Your username must consist of at least 8 characters"
					},
            tel: {
						required: "Please enter a Phone number",
						minlength: "Your username must consist of at least 11 characters"
					},
            termsOfUse: "This field is required!"
        },
        errorPlacement: function (error, element) {
            var placeError = $(element).parent();
            error.addClass("help-block");
            error.appendTo(placeError);
        },
        submitHandler: function () {
            console.log("submitted")
        },
        success: function (label, element) {
            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if (!$(element).next("span")[0]) {
               // $("<span class='glyphicon glyphicon-ok form-control-feedback'></span>").insertAfter($(element));
            }
        }
    });
    
    $("#LoginForm").validate({
        errorElement: "em",
        rules: {
            logEmail: "required",
            logPass: {
						required: true,
						minlength: 8
					}
            
        },
        messages: {
            logEmail: "Please enter a valid email address!",
            logPass: {
						required: "Please enter a Password",
						minlength: "Your username must consist of at least 8 characters"
					}
            
        },
        errorPlacement: function (error, element) {
            var placeError = $(element).parent();
            error.addClass("help-block");
            error.appendTo(placeError);
        },
        submitHandler: function () {
            console.log("submitted")
        },
        success: function (label, element) {
            // Add the span element, if doesn't exists, and apply the icon classes to it.
            if (!$(element).next("span")[0]) {
               // $("<span class='glyphicon glyphicon-ok form-control-feedback'></span>").insertAfter($(element));
            }
        }
    });

    //  $('.photoback img').css('margin-top',($(window).height()-$('.photoback').height())/2);
    
    


});
