import React from "react";
import "./AdminDetails.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Mann from "../../assets/Olivier_1500_Trptch.jpg";

const AdminDetails = () => {
  return (
    <div className="admindetails">
      <div className="admindetails-main">
        <div className="admindetails-card1">
          <div className="admindetails-card1-top">
            <div className="admindetails-card1-top-left">
              <div className="admindetails-card1-top-left-text">
                <p>
                  <span style={{ fontSize: "20px", fontWeight: "600" }}>
                    Abhishek Dulat
                  </span>
                  <br />
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#1f1f1f",
                      fontWeight: "500",
                    }}
                  >
                    Web_x RD
                  </span>
                </p>
              </div>
              <div className="admindetails-card1-top-left-button">
                <button>Edit Your Profile</button>
              </div>
            </div>
            <div className="admindetails-card1-top-right">
              <img src={Mann} alt="man" />
            </div>
          </div>
          <div className="admindetails-card1-bottom">
            <div className="card1-b-top">
              <div className="c-b-1">
                <p>
                  <span
                    style={{
                      color: "#427AFF",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    156K
                  </span>
                  <br />
                  <span style={{ color: "#343434", fontSize: "12px" }}>
                    Total Products
                  </span>
                </p>
              </div>
              <div className="c-b-2">
                <p>
                  <span
                    style={{
                      color: "#427AFF",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    $ 370.56
                  </span>
                  <br />
                  <span style={{ color: "#1f1f1f", fontSize: "12px" }}>
                    Total Earning
                  </span>
                </p>
              </div>
            </div>
            <div className="card1-b-bottom">
              <div className="c-b-1">
                <p>
                  <span
                    style={{
                      color: "#427AFF",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    5
                  </span>
                  <br />
                  <span style={{ color: "#343434", fontSize: "12px" }}>
                    Return Products
                  </span>
                </p>
              </div>
              <div className="c-b-1">
                <p>
                  <span
                    style={{
                      color: "#427AFF",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    5K
                  </span>
                  <br />
                  <span style={{ color: "#343434", fontSize: "12px" }}>
                    Likes
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="admindetails-card2"
          style={{ visibility: "hidden" }}
        ></div>
        <div
          className="admindetails-card3"
          style={{ visibility: "hidden" }}
        ></div>
      </div>
    </div>
  );
};

export default AdminDetails;
