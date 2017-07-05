
$(document).ready(function() {
    console.log("ready");
});

$("#search").on("click", function() {

    var race = $("#q1").val();
    var age = $("#q2").val();
    var state = $("#q3").val();
    var education = $("#q4").val();
    var gender = $("#q5").val();



    var currentLocation = window.location.href;

    console.log(currentLocation);

    var url = '/data-analysis/' + `${race}/${age}/${state}/${education}/${gender}`;
    console.log(url);

    $.post(url)
        .done(function(data) {
            console.log(data);
        });





    return false;

});
