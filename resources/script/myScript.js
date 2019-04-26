$(document).ready(function () {

    $("#fix").click(function () {
        $(this).children('ul,li').toggle("500");
    });


    $("#button").click(function () {
        $("#rootUl").toggle();
    });



});