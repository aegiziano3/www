//FAQ Page
$(document).ready(function() {
    $("#faq").find("dd").hide().end().find("dt").click(function() {
        $(this).next().slideToggle();
     });
});

