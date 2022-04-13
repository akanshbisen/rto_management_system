import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import DLService from "../../../../Services/DLService";
import "./style.css";
import dlImage from "./images/DL.png";
//import passPhoto from "./images/AKANSH_BISEN.jpg";
import { Preview, print } from "react-html2pdf";
import { render } from "@testing-library/react";
const DLDownload = () => {
  const { id, name } = sessionStorage;
  const canvas = useRef(null);
  const [dl, setDL] = useState([]);
  const [user, setUser] = useState([]);
  const [dl_no, setDl_no] = useState("");
  const [dl_issue_date, setDl_issue_date] = useState("");
  const [dl_expiry_date, setDl_expiry_date] = useState("");
  const [gender, setGender] = useState("");
  const [blood_group, setBlood_group] = useState("");
  const [l_category, setL_category] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const [dlphoto, setDlphoto] = useState("");

  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ id });
    DLService.getDLByUserId(id)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.user);
        setUser(response.data.user);
        setDL(response.data);
        console.log(dl);
        setBlood_group(user.blood_group);
        setAddress(user.address);
        setDob(user.dob);
        setGender(user.gender);
        setDl_issue_date(dl.dl_issue_date);
        setDl_expiry_date(dl.dl_expiry_date);
        setL_category(dl.l_category);
        setDl_no(dl.dl_no);
        // setDlphoto(user.dlphoto);
        // setDlphoto(passPhoto);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [image, setImage] = useState(null);

  useEffect(() => {
    const catImage = new Image();

    catImage.src = dlImage;
    catImage.onload = () => setImage(catImage);
  }, []);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      //   ctx.fillRect(100, 0, 400, 300);
      // ctx.drawImage(image, 50, 70,);
      ctx.drawImage(image, 100, 0, 400, 300);

      ctx.font = "15px Comic Sans MS";
      // ctx.fillStyle = "white";
      // ctx.textAlign = "center";

      ctx.fillText(name, 238, 87);
      ctx.fillText(blood_group, 238, 120);
      ctx.fillText(address, 238, 145);
      ctx.fillText(dob, 263, 177);
      ctx.fillText(gender, 270, 192);
      ctx.fillText(dl_issue_date, 392, 178);
      ctx.fillText(dl_expiry_date, 392, 197);
      ctx.fillText(l_category, 275, 229);
      ctx.fillText(dl_no, 410, 240);
    }
  }, [
    image,
    canvas,
    name,
    blood_group,
    address,
    dob,
    gender,
    dl_issue_date,
    dl_expiry_date,
    l_category,
    dl_no,
    // dlphoto,
  ]);

  return (
    
    <div>
      <Preview id={"invoice"} style="margin-left: 50px; margin-top: 30px">
      <h1>Download Driving Licence</h1>

      <div>
        <canvas
          ref={canvas}
          width={"600px"}
          height={"450px"}
          style={{ marginTop: "100px" }}
        />
      </div>
      </Preview>
    </div>
  );
};

export default DLDownload;
