async function GetPhotos() {
  "use strict";

  var form = $("#myform");

  form.validate();

  if (form.valid()) {
    var rover = $("input[name='rover']:checked").val();
    var picturedate = $("#picturedate").val();
    var apiKey = "tH6OlQISHhmt9KgPwRSsxf32c6T4C2iEcHbsVuLj";

    var myURL2 =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/" +
      rover +
      "/photos?earth_date=" +
      picturedate +
      "&api_key=" +
      apiKey;

    let PictureObject = await fetch(myURL2);
    let Result = await PictureObject.json();
    let msg = Result;

    document.getElementById("photos").innerHTML =
      msg.photos.length + " pictures found";

    // Clear previous images
    $("#imageContainer").empty();

    if (msg.photos.length > 0) {
      for (let i = 0; i < msg.photos.length; i++) {
        // Create image element
        var img = document.createElement("img");
        img.src = msg.photos[i].img_src;
        img.title = msg.photos[i].camera.full_name;

        // Append image to image container
        document.getElementById("imageContainer").appendChild(img);
      }
    } else {
      document.getElementById("photos").innerHTML = "No pictures found.";
    }
  }
}

function clearform() {
  "use strict";

  document.getElementById("picturedate").value = "";
  document.getElementById("picturedateError").innerHTML = "";
  document.getElementById("roverError").innerHTML = "";
  document.getElementById("curiosityoperator").checked = false;
  document.getElementById("opportunityoperator").checked = false;
  document.getElementById("spiritoperator").checked = false;
  document.getElementById("roverError").innerHTML = "";
  document.getElementById("Search").innerHTML = "";
}
