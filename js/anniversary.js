/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    
    var $enter, $item1, $item2, $item3, $item4, $item5, $item6;
    $enter = $('#enter');
    $item1 = $('.item1');
    $item2 = $('.item2');
    $item3 = $('.item3');
    $item4 = $('.item4');
    $item5 = $('.item5');
    $item6 = $('.item6');
    
    $enter.on('click', function () {
        $item1.show();
    });
    
    $item1.on('click', function () {
        $item2.show();
    });
    
    $item2.on('click', function () {
        $item3.show();
    });

    $item3.on('click', function () {
        $item4.show();
    });
    
    $item4.on('click', function () {
        $item5.show();
    });

    $item5.on('click', function () {
        $item6.show();
    });
    $item6.on('click', function () {
        $("h1:contains('Сегодня особенный день')").html("Ксюшенька, с днем рожденья тебя!");
        $enter.hide();
        $('.item').hide();
        $('body').css('background-color', '#229AAD');
        $('.blow').show();
        $('.drawing').show();
        $('#wind').show();
    });
    
    $('#wind').on('click', function () {
        $('.flame').hide();
        $(".blow:contains('Задуй свечку!')").html("Зажги свечку!");
        $(this).hide();
        $('#fire').show();
    });
	 
    $('#fire').on('click', function () {
        $('.flame').show();
        $(".blow:contains('Зажги свечку!')").html("Задуй свечку!");
        $(this).hide();
        $('#wind').show();
    });
});
