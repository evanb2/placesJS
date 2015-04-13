$(document).ready(function() {
    $("form#new-place").submit(function(event) {
        event.preventDefault();

        var inputLocation = $("input#new-location").val();
        var inputDate = $("input#new-date").val();
        var inputNotes = $("input#new-notes").val();
        var newPlace = { locations: inputLocation, date: inputDate, notes: inputNotes };

        $("ul#places").append("<li><span class='place'>" + newPlace.locations + " "
                                + newPlace.date + " " + newPlace.notes + "</span></li>");

        $("input#new-location").val("");
        $("input#new-date").val("");
        $("input#new-notes").val("");

        $(".place").last().click(function() {
            $("#show-place").show();
            $("#show-place h2").text(newPlace.locations);
            $(".locations").text(newPlace.locations);
            $(".date").text(newPlace.date);
            $(".notes").text(newPlace.notes);
        });
    });
});
