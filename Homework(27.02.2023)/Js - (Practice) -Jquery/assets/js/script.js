$(document).ready(function(){

    // let elem = document.querySelector("h1");
    let elem = $("h1");
    // console.log(elem.html("salam").text());


    // $(".check").click(function(){
    //     $(this).css("background-color","red")
    // })

    // $(".add").click(function(){
    //     $(this).css("background-color","magenta");
    //     $(this).next().css("background-color","magenta");

    // })

   

    $(".hide").click(function(){
         $(".content").slideUp(500)
    })

    // $(".show").click(function(){
    //     $(".content").show(2000,function(){
    //         $(this).css("background-color","blue")
    //     });
    // })

    // $(".toggle").click(function(){
    //     $(".content").toggle(2000);
    // })


    $(".show").click(function(){
        $(".content").slideDown(500)
    })

    $(".toggle").click(function(){
        $(".content").slideToggle(500)
    })

    
})