$(document).ready(function () {

    let headers = $(".item");
    let contents = $(".items");

    headers.click(function (e) {
        

        $(".active").removeClass("active");
        $(this).addClass("active")

        var index = $(this).index();
        contents.hide();
        contents.eq(index).show();
    })








})