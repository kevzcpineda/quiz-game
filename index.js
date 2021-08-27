$(document).ready(function(){
    $("#second").hide();
    $("#third").hide();
    $("#forth").hide();
    $("#fifth").hide();
    $("#six").hide();
    $("#literature").hide();
    $("#history").hide();
    $("#science").hide();
    $("#cat").hide();
    $("#you-choose-literature").hide();
    $("#you-choose-science").hide();
    $("#you-choose-history").hide();
    $("#ready").hide();
    $("#ready1").hide();
    $("#ready2").hide();

    
    
    $("#first").click(function(){
        $(this).hide();
        $("#second").show();
    });
    
    $("#second").click(function(){
        $(this).hide();
        $("#third").show();
    });

    $("#third").click(function(){
        $(this).hide();
        $("#forth").show();
    });

    $("#forth").click(function(){
        $(this).hide();
        $("#fifth").show();
    });

    $("#fifth").click(function(){
        $(this).hide();
        $("#six").show();
    });

    $("#six").click(function(){
        $(this).hide();
        $("#cat").show();
        $("#literature").show();
        $("#history").show();
        $("#science").show();

        
    });

    $("#literature").click(function(){
        $("#cat").hide();
        $("#history").hide();
        $("#science").hide();
        $(this).hide();
        $("#you-choose-literature").show();
        $("#ready").show();



    });

    $("#science").click(function(){
        $("#cat").hide();
        $("#history").hide();
        $("#literature").hide();
        $(this).hide();
        $("#you-choose-science").show();
        $("#ready1").show();



    });
    $("#history").click(function(){
        $("#cat").hide();
        $("#literature").hide();
        $("#science").hide();
        $(this).hide();
        $("#you-choose-history").show();
        $("#ready2").show();
        


    });

    $("#ready").click(function(){
        window.location = "literature.html";
    });
    $("#ready1").click(function(){
        window.location = "science.html";
    });

    $("#ready2").click(function(){
        window.location = "history.html";
    });





    
        

    

});


