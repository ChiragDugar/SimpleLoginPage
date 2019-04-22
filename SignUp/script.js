$(document).ready(function(){
    $("#first").hover(function(){
        $(this).css({"width":"300px", "border-color":"green"});
    },
        function(){
        $(this).css({"width":"250px", "border-color":"purple"})        
    }
    );
    
    $(".second").hover(function(){
        $(this).css({"width":"300px", "border-color":"green"});
    },
         function(){
        $(this).css({"width":"250px", "border-color":"purple"})              
    });
    
    $("#third").on("click",function(){
        $(this).css("border-color","#D3D3D3");
    })
});