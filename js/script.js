$(function () {
    $('.button').on('click', function () {
       $('.end').toggleClass('active');
       $('.start').toggleClass('unactive');
       $('body').toggleClass('lock');
    });
});