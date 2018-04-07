$(function () {
    var viewMenu = $('menu');


    $('.fa-bars').on('click', function () {
        viewMenu.toggleClass("view");
        if (viewMenu.hasClass("view")) {
            //            viewMenu.animate({
            //                left: '0'
            //            },300);
            //            
            //            $('body').animate({
            //                paddingLeft: '240px'
            //            },300);

            viewMenu.animate({
                width: '240px'
            }, 300);

            $('body').animate({
                paddingLeft: '240px'
            }, 300);

            $('.logo-mini').addClass('hide');
            $('.logo ').removeClass('hide');
            $('menu').css('padding', '15px');
            $('menu .list .item img').css('margin-left', '0px');
            $('menu .list .item a .hover-span').css('width', '7px');
            $('.item .item-name').animate({
                left: '55px'
            }, 400);


        } else {
            //                viewMenu.animate({
            //                    left: '-195px'
            //                },300);
            //                
            //                $('body').animate({
            //                paddingLeft: '45px'
            //                },300);
            viewMenu.animate({
                width: '55px'
            }, 300);

            $('body').animate({
                paddingLeft: '55px'
            }, 300);

            $('.logo').addClass('hide');
            $('.logo-mini').removeClass('hide');
            $('menu').css('padding', '0px');
            $('menu .list .item img').css('margin-left', '15px');
            $('menu .list .item a .hover-span').css('width', '21px');
            $('.item .item-name').animate({
                left: '245px'
            }, 200);

        }
    });


$("#datepicker" ).datepicker({dateFormat:"dd/mm/yy"});
    $("#datepicker" ).datepicker( "setDate", new Date() );



});

function queryParams() {
    return {
        type: 'owner',
        sort: 'updated',
        direction: 'desc',
        per_page: 100,
        page: 1
    };
    
    
    

}

//function rowStyle(row, index) {
//    return {
//        classes: 'text-nowrap table-no-bordered',
//        css: {
//            "color": "red",
//            "font-size": "50px"
//        }
//    };
//}

