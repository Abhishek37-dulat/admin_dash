import React from "react";
import "./Footer.css";
import FitbitIcon from "@mui/icons-material/Fitbit";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer1">
          <p>
            <FitbitIcon fontSize="large" />
          </p>
          <p style={{ fontSize: "24px" }}>
            <span style={{ color: "#427aff", marginLeft: "12px" }}>SHOPE</span>{" "}
            <span style={{ color: "#1f1f1f" }}>ME</span>
          </p>
        </div>
        <div className="footer2">
          <p>WOMAN</p>
          <p>MAN</p>
          <p>KIDS</p>
          <p>ACCESSORIES</p>
          <p style={{ border: "none" }}>E-BOOK</p>
        </div>
        <div className="footer3">
          <p>
            <FacebookIcon fontSize="large" />
          </p>
          <p>
            <TwitterIcon fontSize="large" />
          </p>
          <p>
            <SettingsSuggestIcon fontSize="large" />
          </p>
        </div>
        <div className="footer4">
          <p>Since 1975 @ All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
