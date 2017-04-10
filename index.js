$(function() {
    $(".btm-submit").click(sendForm);
});


function sendForm(e) {
    e.preventDefault();

    $.ajax({
        url: "https://formspree.io/dimaka888@yahoo.com",
        method: "POST",
        data: {
            clientName: $("#text").val(),
            clientEmail: $("#email").val(),
            comment: $("#message").val()
        },
        dataType: "json"
    }).done(function() {
        $("#done").html("Thank you for contacting us");
    });

}