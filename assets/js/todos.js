//Check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Delete todo by clicking on trash can
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//Create new todo item from user input on enter
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
    }
});

//Show and hide new todo input box
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})