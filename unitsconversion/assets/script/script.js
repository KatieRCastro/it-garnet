function calculate() {
  "use strict";

  // Get a reference to the form - Use the ID of the form
  var form = $("#myform");

  // If all of the form elements are valid, the get the form values
  if (form.valid()) {
    // Operand 1
    var fromvalue = document.getElementById("FromValue").value;

    // Operator
    // Get the value associated with the operator that was checked (+, -, *, or /)
    var operator;
    if (document.getElementById("CentimetersOperator").checked) {
      operator = document.getElementById("CentimetersOperator").value;
    }
    if (document.getElementById("MetersOperator").checked) {
      operator = document.getElementById("MetersOperator").value;
    }
    if (document.getElementById("KilometersOperator").checked) {
      operator = document.getElementById("KilometersOperator").value;
    }
    if (document.getElementById("InchesOperator").checked) {
      operator = document.getElementById("InchesOperator").value;
    }
    if (document.getElementById("FeetOperator").checked) {
      operator = document.getElementById("FeetOperator").value;
    }
    if (document.getElementById("YardsOperator").checked) {
      operator = document.getElementById("YardsOperator").value;
    }
    if (document.getElementById("MilesOperator").checked) {
      operator = document.getElementById("MilesOperator").value;
    }

    CalculateResult(fromunit, operator, tounit);
  }
}

async function CalculateResult(fromunit, operator, tounit) {
  // URL and method used with AJAX Call
  var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

  /* AJAX calculator requires Operand1, Operator, and Operand2 */
  myURL =
    myURL +
    "?FromUnit=" +
    encodeURIComponent(fromunit) +
    "&Operator=" +
    encodeURIComponent(operator) +
    "&ToUnit=" +
    encodeURIComponent(tounit);

  /* fetch the results */
  let myCalcObject = await fetch(myURL);
  let myResult = await myCalcObject.text();

  document.getElementById("Result").innerHTML = myResult;
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
  document.getElementById("OperatorError").innerHTML = "";
  document.getElementById("CentimetersOperator2").checked = false;
  document.getElementById("MetersOperator2").checked = false;
  document.getElementById("KilometersOperator2").checked = false;
  document.getElementById("InchesOperator2").checked = false;
  document.getElementById("FeetOperator2").checked = false;
  document.getElementById("YardsOperator2").checked = false;
  document.getElementById("MilesOperator2").checked = false;
  document.getElementById("Operator2Error").innerHTML = "";
   document.getElementById("Result").innerHTML = "";
  
 
}

$("#myform").validate({});
