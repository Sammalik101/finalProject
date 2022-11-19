window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
 $(document).ready(function(){

    $("#homeButton").click(function(){
        $("#nav1").addClass("active");
        $("#nav2").removeClass("active");
        $("#nav3").removeClass("active");
        $("#nav4").removeClass("active");
        $("#nav5").removeClass("active");
    });
    $("#sourcesButton").click(function(){
        $("#nav1").removeClass("active");
        $("#nav2").addClass("active");
        $("#nav3").removeClass("active");
        $("#nav4").removeClass("active");
        $("#nav5").removeClass("active");
    }); 
    $("#contactButton").click(function(){
        $("#nav1").removeClass("active");
        $("#nav2").removeClass("active");
        $("#nav3").addClass("active");
        $("#nav4").removeClass("active");
        $("#nav5").removeClass("active");
    });
    $("#aboutButton").click(function(){
        $("#nav1").removeClass("active");
        $("#nav2").removeClass("active");
        $("#nav3").removeClass("active");
        $("#nav4").addClass("active");
        $("#nav5").removeClass("active");
    }); 
    $("#abstractButton").click(function(){
        $("#nav1").removeClass("active");
        $("#nav2").removeClass("active");
        $("#nav3").removeClass("active");
        $("#nav4").removeClass("active");
        $("#nav5").addClass("active");
    }); 
});
function drop(){
    if( $(".dropdown-content").css("display") == "none"){
        $(".dropdown-content").css("display","block");
    }
    else{
        $(".dropdown-content").css("display","none");
    }
}
function link(linkNumber){
    for(let i=1;i<8;i++){
        if(i != linkNumber)
            $("#content"+i).hide();
        else
            $("#content"+i).show();
    }
}
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
    
}

function redirect(redirectLocation){
    window.location.href = "/finalProject/" + redirectLocation;
}
