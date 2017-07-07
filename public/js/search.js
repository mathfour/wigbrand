

$("#search").on("click", function() {

    var race = $("#q1").val();
    var age = $("#q2").val();
    var state = $("#q3").val();
    var education = $("#q4").val();
    var gender = $("#q5").val();

    var currentLocation = window.location.href;

    var url = `/${race}/${age}/${state}/${education}/${gender}`;

<<<<<<< HEAD
    $.ajax({ url: currentLocation + url, method: "GET"})
            .done(function(data) {
                console.log(data);
            });
=======
    var currentLocation = window.location;

    console.log(currentLocation);
    $.post(currentLocation + `/${race}/${age}/${state}/${education}/${gender}`, function(data) {

        console.log(data);

    });




>>>>>>> 0f8908ec3722f0d49bd0a50eb1c094776faecc5d

    return false;

});
