import { Preview, print } from "react-html2pdf";

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
