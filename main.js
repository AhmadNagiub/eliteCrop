
//adjust height of slider
let winH    = $(window).height()
    uppnavH = $(".upper-bar").innerHeight()
    navH    = $(".navbar").innerHeight();

$("#slider , .carousel-item").height(winH - (uppnavH + navH));

// shuffle featured work
$(".work-featured ul li").on("click" , function(){
    //add class active to whatever i clicked and delete class active from its siblings in same paernt
    $(this).addClass("active").siblings().removeClass("active");
    //condition to see if i clicked on li that has data-class called all
    if($(this).data("class") === "all")
    {
        //if yes make all images has opacity 1 
        $(".work-featured .col-md").css("opacity" , "1");
    }
    else
    {
        // if not make all div has class col-md it opacity is .08
        $(".work-featured .shuffle-images .col-md").css("opacity" , ".08");
        //and got element that have query of $(this).data("class") and catch its parent and make its opacity 1
        $($(this).data("class")).parent().css("opacity" , 1)
        // $($(this).data("class")) => $(.logos)
    }
})