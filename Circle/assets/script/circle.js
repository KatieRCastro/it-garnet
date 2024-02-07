$("#TriangleForm").validate({});

function displaycircle() {
  // if the form is valid, then make the calculations
  if ($("#CircleForm").valid()) {
    document.getElementById("circle").innerHTML = "";

    var radius; 
    var radiusfp; 
    var diameter; 
    var diameterfp; 
    var circumference; 
    var circumferencefp;
    var area;
    var areafp;
    var result; 

    // read in the legs as a string
    radius = document.getElementById("radius").value;
    diameter = document.getElementById("diameter").value;
    circumference = document.getElementById("circumference").value;
    area = document.getElementById("area").value;

    // Convert numbers from strings to Floating Point
    radiusfp = parseFloat(radius);
    diameterfp = parseFloat(diameter);
    circumferencefp = parseFloat(circumference);
    areafp = parseFloat(area);

    // calculate the diameter
    diameter = calcdiameter(radius, 2);
    // display the diameter
    document.getElementById("diameter").innerHTML = diameter.toString();

    circumference = calcircumference(2,Math.PI, radius);
    document.getElementById("circumference").innerHTML = circumference.toString();
     
    area = calcarea(Math.PI,radius,radius);
    document.getElementById("area").innerHTML = area.toString();
  }
}

function calcDiameter(radiusvalue, 2) {
  // returns hypotenuse of a right triangle
  // square root of leg1 squared plus leg2 squared
  return(2*radiusvalue);
}
function calCircumference(2,Math.PI, radius) {
  // returns hypotenuse of a right triangle
  // square root of leg1 squared plus leg2 squared
  return(2*Math.PI* radius);
}
function calcArea(Math.PI,radius,radius) {
  // returns hypotenuse of a right triangle
  // square root of leg1 squared plus leg2 squared
  return(Math.PI*radius*radius);


function clearForm() {
   document.getElementById("radius").value = "";
           document.getElementById("radiuserror").innerText = "";
           document.getElementById("diameter").innerText = "";
           document.getElementById("circumference").innerText = "";
           document.getElementById("area").innerText = "";
}
