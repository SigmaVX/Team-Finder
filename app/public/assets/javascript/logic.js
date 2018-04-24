
//Data Capture From Form
$("#add-btn").on("click", function(event) {
    event.preventDefault();
    var newCharacter = {
      name: $("#name").val().trim(),
      role: $("#role").val().trim(),
      age: $("#age").val().trim(),
      forcePoints: $("#force-points").val().trim()
    };

    // AJAX For Posting Data Capture 
    $.post("/api/characters", newCharacter).then(function(data) {
      console.log("add.html", data);
      alert("Adding character...");
  });
});

