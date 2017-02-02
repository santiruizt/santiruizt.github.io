// // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
// var mainbottom = $('#main').offset().top + $('#main').height();

// // on scroll, 
// $(window).on('scroll',function(e){

//     // we round here to reduce a little workload
//     var stop = Math.round($(window).scrollTop());
//     var sectionA = document.querySelector('.content-section-a');

    

//     // if (stop > mainbottom) {
//     //     $('.navbar-default').addClass('past-main');
//     // } else {
//     //     $('.navbar-default').removeClass('past-main');
//     // }

//     if (sectionA.offsetTop < window.scrollY) {
//     	console.log('sectionA.offsetTop > window.scrollY');
//         $('.navbar-default').addClass('past-main');
//     } else {
//         $('.navbar-default').removeClass('past-main');
//     }
// });

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});




