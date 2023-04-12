import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import '../Footer/footer.css';


const footer = () => {
  return (
    <div
      className="container"
      style={{
        display:"flex",
        flexDirection:"column",
        height: "440px",
        backgroundColor: "#1C1C1C",
        borderTopLeftRadius: "36px",
        borderTopRightRadius: "36px",
        position:'absolute',
        bottom:"0"
      }}
    >
      <div
        className="upper-footer"
        style={{ paddingTop: "32px", paddingBottom: "32px" }}
      >
        <div
          className="bg-white  text-blue-600 font-bold py-3 px-9 gap-4 border-gray-400 rounded flex items-center justify-center "
          style={{
            maxWidth: "fit-content",
            padding: "auto",
            margin: "auto",
            borderRadius: "26px",
          }}
        >
          <AiOutlineArrowLeft />
          <button>Go back</button>
        </div>
      </div>
      <div
        className="bottom-footer"
        style={{
          backgroundColor: "#FFFFFF",
          zIndex: "1",
          height: "400px",
          borderTopLeftRadius: "36px",
          borderTopRightRadius: "36px",
        }}
      >
        <div
          className="btm-container"
        >
          <div className="registered-entity" style={{display:"flex",flexDirection:"column",textAlign:"center"}}>
            <h1 style={{ fontWeight: "800",paddingTop:"34px" }}>REGISTERED ENTITY:</h1>
            <p style={{paddingTop:"14px"}}>
              VINSM Globe Pvt Ltd
              <br />
              GSTIN: 07AAFCK1574R1ZX
              <br />
              CIN: U52605DL2012PTC236944
              <br />
              <a href="tel: +91 7042 88 4270">Phone: +91 7042 88 4270</a>
              
            </p>
          </div>

          <div className="btm-footer" >
            <h1 style={{ fontWeight: "800",paddingTop:"34px" }}>FOR BUYERS</h1>
            <button style={{fontWeight:"lighter",paddingTop:"14px"}}>Our Buyers</button>
            <br />
            <button>Browse</button>
            <br />
            <button>Post Your Requirements</button>
          </div>
          <div className="btm-footer">
            <h1 style={{ fontWeight: "800",paddingTop:"34px" }}>FOR ARTIST</h1>
            <button style={{paddingTop:"14px"}}>Login</button>
            <br />
            <button>Artist SignUp</button>
            <br />
            <button>Artist Membership</button>
            <br />
            <button>Jobs</button>
          </div>
          <div className="btm-footer">
            <h1 style={{ fontWeight: "800" ,paddingTop:"34px"}}>ABOUT US</h1>
            <button style={{paddingTop:"14px"}}>Our Story</button>
            <br />
            <button>Contact Us</button>
            <br />
            <button>Careers</button>
          </div>

          <div className="btm-footer">
            <h1 style={{ fontWeight: "800" ,paddingTop:"34px"}}>POLICY</h1>
            <button style={{paddingTop:"14px"}}>Privacy Policy</button>
            <br />
            <button>Terms of Use</button>
            <br />
            <button>Disclaimer</button>
            <br />
            <button>FAQs</button>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",fontSize:"14px",color:"#5c5c5d",position:"absolute",bottom:"0",width:"100%"}}>
          <h1>
            © Copyright 2015- 2023 | VINSM Globe Pvt. Ltd. | All Rights
            Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default footer;
