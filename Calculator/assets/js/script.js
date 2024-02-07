function calculate() {
  /* Make sure that the form is valid */
  if ($("#myform").valid()) {
    /* get the operands from the form */
    var operand1 = document.getElementById("Operand1").value;
    var operand2 = document.getElementById("Operand2").value;

    /* convert the operands from string to floating point */
    var operand1fp = parseFloat(operand1);
    var operand2fp = parseFloat(operand2);

    if (document.getElementById("AvgOperator").checked) {
      operator = document.getElementById("AvgOperator").value;
    }


    /* if operator was "Avg" the calcualute the average of 3 operands */
    if (operator == "Avg") {
      result = (operand1fp + operand2fp) / 2.0;
    }

    /* convert the result to a string and display it */
    document.getElementById("Result").innerHTML = result.toString();
  }
}

function clearform() {
  /* Set all of the form values to blank or false */
  document.getElementById("Operand1").value = "";
  document.getElementById("Operand2").value = "";
  document.getElementById("Operand3").value = "";
  document.getElementById("Operand1Error").innerHTML = "";
  document.getElementById("Operand2Error").innerHTML = "";
  document.getElementById("OperatorError").innerHTML = "";
  document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$("#myform").validate({});
