jQuery(document).ready(function() {

    p = $.ajax({
        type: "GET",
        url: "/text",
        cache: false,
    });
    
    p.done(function(msg) {
        $("#text").html(msg);
    });


    $("#text2 button").click(function() {
        p = $.ajax({
            type: "GET",
            url: "/text2",
            cache: false,
        });
    
        p.done(function(msg) {
            $("#text2 p").html(msg);
        });
        
    
    });



});
