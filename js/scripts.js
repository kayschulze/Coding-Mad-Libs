$(document).ready(function() {
  $("form").submit(function(event) {
    console.log("form submitted.");
    var person1 = $("input#person1").val();
    var person2 = $("input#person2").val();
    var codinglanguage = $("input#codinglanguage").val();
    var exclamation = $("input#exclamation").val();
    var verb = $("input#verb").val();
    var noun = $("input#noun").val();

    $(".person1").text(person1);
    $(".person2").text(person2);
    $(".codinglanguage").text(codinglanguage).val();
    $(".exclamation").text(exclamation).val();
    $(".verb").text(verb).val();
    $(".noun").text(noun).val();

    $("#story").show();

    event.preventDefault();
  });
});
