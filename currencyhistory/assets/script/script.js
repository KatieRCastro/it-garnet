async function Results() {
  "use strict";

  var form = $("#myform");

  form.validate();

  if (form.valid()) {
    var BaseCurrency = document.getElementById("basecurrency").value;
    var ToCurrency = document.getElementById("tocurrency").value;
    var FromDate = document.getElementById("FromDate").value;
    var ToDate = document.getElementById("ToDate").value;

    var apiKey = "m8SAlxSEu3gGUy77jiRxJBFgvjetPa84";

    var myURL2 =
      "https://api.polygon.io/v2/aggs/ticker/C:" +
      BaseCurrency +
      ToCurrency +
      "/range/1/day/" +
      FromDate +
      "/" +
      ToDate +
      "?adjusted=true&sort=asc&limit=32&apiKey=" +
      apiKey;

    var msg2Object = await fetch(myURL2);

    if (msg2Object.status >= 200 && msg2Object.status <= 299) {
      var msg2JSONText = await msg2Object.text();
      var msg2 = JSON.parse(msg2JSONText);

      var date = [];
      var value = [];
      var numdays = msg2.results.length;

      if (numdays > 0) {
        for (var i = 0; i < numdays; i++) {
          value[i] = msg2.results[i].c;
          var tempdate = new Date(msg2.results[i].t);
          date[i] = tempdate.toLocaleDateString();
        }
      }

      var ctx0 = document.getElementById("chartjs-0");
      var myChart = new Chart(ctx0, {
        type: "line",
        data: {
          labels: date,
          datasets: [
            {
              label: "Currency Value History",
              data: value,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              lineTension: 0.1,
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: true,
        },
      });
    } else {
      alert("Currency Not Found - Status: " + msg2Object.status);
      return;
    }
  }
}


function ClearForm() {
  document.getElementById("FromDate").value = "";
  document.getElementById("ToDate").value = "";
  document.getElementById("ToDateError").innerHTML = "";
  document.getElementById("FromDateError").innerHTML = "";
  document.getElementById("basecurrency-error").innerHTML = "";
  document.getElementById("tocurrency-error").innerHTML = "";

  var canvas0 = document.getElementById("chartjs-0");
  var context0 = canvas0.getContext("2d");
  context0.clearRect(0, 0, canvas0.width, canvas0.height);
}