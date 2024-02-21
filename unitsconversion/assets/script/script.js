function convert() {
  "use strict";

  var form = $("#myform");

  if (form.valid()) {
    var FromValue = $("#FromValue").val();
    var FromUnit = $("input[name='FromUnit']:checked").val();
    var ToUnit = $("input[name='ToUnit']:checked").val();
    convertUnits(FromValue, FromUnit, ToUnit);
  }
}

async function convertUnits(FromValue, FromUnit, ToUnit) {
  var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
  myURL +=
    "?FromValue=" +
    encodeURIComponent(FromValue) +
    "&FromUnit=" +
    encodeURIComponent(FromUnit) +
    "&ToUnit=" +
    encodeURIComponent(ToUnit);

  let response = await fetch(myURL);
  let myResult = await response.text();

  $("#ToValue").html(myResult);
}

function clearform() {
  "use strict";

  /* Set all of the form values to blank or false */
  document.getElementById("FromValue").value = "";
  document.getElementById("FromValueError").innerHTML = "";
  document.getElementById("CentimetersOperator").checked = false;
  document.getElementById("MetersOperator").checked = false;
  document.getElementById("KilometersOperator").checked = false;
  document.getElementById("InchesOperator").checked = false;
  document.getElementById("FeetOperator").checked = false;
  document.getElementById("YardsOperator").checked = false;
  document.getElementById("MilesOperator").checked = false;
  document.getElementById("FromUnitError").innerHTML = "";
  document.getElementById("CentimetersOperator2").checked = false;
  document.getElementById("MetersOperator2").checked = false;
  document.getElementById("KilometersOperator2").checked = false;
  document.getElementById("InchesOperator2").checked = false;
  document.getElementById("FeetOperator2").checked = false;
  document.getElementById("YardsOperator2").checked = false;
  document.getElementById("MilesOperator2").checked = false;
  document.getElementById("ToUnitError").innerHTML = "";
  document.getElementById("Result").innerHTML = "";
}

$("#myform").validate({});
