$( document ).ready(function(){
        $("p").mouseenter(function(){
            $(this).css("color", "orange");
        });
        $("button").click(function(){
            $("#shamar").css("position", "fixed").css("top","0").css("right","0");
        });
        
});
