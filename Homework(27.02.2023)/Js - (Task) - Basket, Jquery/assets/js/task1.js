$(document).ready(function(){
    let navbar = $(".navbar");
    let closeIcon = $(".navbar .closeicon");
    let openIcon = $(".navbar .openicon")
    $(".openicon").click(function(){
        navbar.removeClass("hidden-navbar");
        closeIcon.removeClass("d-none");
        $(this).addClass("d-none");
    })
    $(".closeicon").click(function(){
        navbar.addClass("hidden-navbar");
        openIcon.removeClass("d-none");
        $(this).addClass("d-none");
    })
})