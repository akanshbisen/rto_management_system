import React from "react";
import { Preview, print } from "react-html2pdf";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var NewComponent = React.createClass({
  render: function () {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="style.css" />
        <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      #image_input {\n        height: 100px;\n        width: 150px;\n      }\n    ",
          }}
        />
        <div className="container">
          <h1>Certificate Generator</h1>
          <label>
            Name:
            <input id="name" type="text" />
          </label>
          <label>
            Blood group:
            <input id="bloodGroup" type="text" />
          </label>
          <label>
            Address:
            <input id="address" type="text" />
          </label>
          <label>
            DOB:
            <input id="dob" type="date" />
          </label>
          <label>
            Gender:
            <input id="gender" type="text" />
          </label>
          <label>
            issueDate:
            <input id="issueDate" type="date" />
          </label>
          <label>
            ExpiryDate:
            <input id="expiryDate" type="date" />
          </label>
          <label>
            Class:
            <input id="class" type="text" />
          </label>
          <label>
            Photo:
            <input id="image_input" type="file" accept="image/jpg" />
          </label>
          <Preview
            id={"invoice"}
            style={{ marginLeft: "50px", marginTop: "30px" }}
          >
            <label htmlFor>Driving Licence</label>
            <div id="display_image" />
            {/* <a href="" id="download-btn">Download</a> */}
            <canvas id="canvas" height="350px" width="500px">
              {" "}
            </canvas>
          </Preview>
        </div>
        {/* for pdf download */}
        <button onclick="generatePDF()">Download</button>
      </div>
    );
  },
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const nameInput = document.getElementById("name");
const bloodGroupInput = document.getElementById("bloodGroup");
const addressInput = document.getElementById("address");
const dobInput = document.getElementById("dob");
const genderInput = document.getElementById("gender");
const issueDateInput = document.getElementById("issueDate");
const expiryDateInput = document.getElementById("expiryDate");
const classInput = document.getElementById("class");
const image_input = document.querySelector("#image_input");
var uploaded_image = "";

const downloadBtn = document.getElementById("download-btn");
const image = new Image();
image.src = "DrivingLicenceEdited.png";
image.onload = function () {
  drawImage();
};

function drawImage() {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  image_input.addEventListener("change", function () {
    // console.log(image_input.value);

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      document.querySelector(
        "#display_image"
      ).style.backgroundImage = `url(${uploaded_image})`;
    });
    //  reader.readAsDataURL(this.files[0]);
    ctx.drawImage(
      reader.readAsDataURL(this.files[0]),
      0,
      0,
      canvas.width,
      canvas.height
    );
    drawImage();
  });
  // ctx.drawImage(reader.readAsDataURL(this.files[0]), 20, 250); //x ,y
  ctx.font = "18px popins";
  ctx.fillStyle = "#000";
  ctx.fillText(nameInput.value, 175, 100); //x ,y
  ctx.fillText(bloodGroupInput.value, 175, 140); //x ,y
  ctx.fillText(addressInput.value, 175, 167); //x ,y
  ctx.fillText(dobInput.value, 213, 206); //x ,y
  ctx.fillText(genderInput.value, 213, 228); //x ,y
  ctx.fillText(issueDateInput.value, 367, 207); //x ,y
  ctx.fillText(expiryDateInput.value, 367, 228); //x ,y
  ctx.fillText(classInput.value, 213, 267); //x ,y
}

nameInput.addEventListener("input", function () {
  drawImage();
});
bloodGroupInput.addEventListener("input", function () {
  drawImage();
});
addressInput.addEventListener("input", function () {
  drawImage();
});
dobInput.addEventListener("input", function () {
  drawImage();
});
genderInput.addEventListener("input", function () {
  drawImage();
});
issueDateInput.addEventListener("input", function () {
  drawImage();
});
expiryDateInput.addEventListener("input", function () {
  drawImage();
});
classInput.addEventListener("input", function () {
  drawImage();
});

function generatePDF() {
  const element = document.getElementById("invoice");

  // html2pdf().from(element).save();
  <button onClick={() => print("a", "invoice")}> print</button>;
}
