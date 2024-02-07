function calculate() {
  /* Make sure that the form is valid */
  if ($("#myform").valid()) {
    /* get the operands from the form */
    var operand1 = document.getElementById("Operand1").value;
    var operand2 = document.getElementById("Operand2").value;

    /* convert the operands from string to floating point */
    var operand1fp = parseFloat(operand1);
    var operand2fp = parseFloat(operand2);

    if (document.getElementById("SumOperator").checked) {
      operator = document.getElementById("SumOperator").value;
    }
    if (operator == "Sum") {
      result = (operand1fp + operand2fp);
    }
    if (document.getElementById("SubOperator").checked) {
      operator = document.getElementById("SubOperator").value;
    }
    if (operator == "Sub") {
      result = (operand1fp - operand2fp);
    }
     if (document.getElementById("MulOperator").checked) {
       operator = document.getElementById("MulOperator").value;
     }
     if (operator == "Mul") {
       result = (operand1fp * operand2fp);
     }
     if (document.getElementById("DivOperator").checked) {
       operator = document.getElementById("DivOperator").value;
     }
     if (operator == "Div") {
       result = (operand1fp / operand2fp);
     }

    /* convert the result to a string and display it */
    document.getElementById("Result").innerHTML = result.toString();
  }
}

function clearform() {
  /* Set all of the form values to blank or false */
  document.getElementById("Operand1").value = "";
  document.getElementById("Operand2").value = "";
  document.getElementById("Operand1Error").innerHTML = "";
  document.getElementById("Operand2Error").innerHTML = "";
  document.getElementById("SumOperator").checked = false;
  document.getElementById("SubOperator").checked = false;
  document.getElementById("MulOperator").checked = false;
  document.getElementById("DivOperator").checked = false;
  document.getElementById("OperatorError").innerHTML = "";
  document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$("#myform").validate({});
