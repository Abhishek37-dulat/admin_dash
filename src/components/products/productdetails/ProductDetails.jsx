import React, { useRef, useState } from "react";
import "./ProductDetails.css";
import ImageIcon from "@mui/icons-material/Image";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ProductDetails = ({ Pid }) => {
  const fullDetails = useRef();
  const fullDetailsshadow = useRef();
  const handleMouseEnter = () => {
    fullDetails.current.style.display = "block";
    fullDetailsshadow.current.style.boxShadow = "0px 0px 20px rgba(0,0,0,0.4)";
    fullDetailsshadow.current.style.height = "65px";
  };
  const handleMouseLeave = () => {
    fullDetails.current.style.display = "none";
    fullDetailsshadow.current.style.boxShadow =
      "0px 2px 6px -2px rgba(0, 0, 0, 0.5)";
    fullDetailsshadow.current.style.height = "50px";
  };
  return (
    <div
      className="product_input_bar"
      ref={fullDetailsshadow}
      onMouseLeave={() => handleMouseLeave()}
      onMouseEnter={() => handleMouseEnter()}
    >
      <div className="productdetails">
        <table className="pd-b-table-1">
          <tr>
            <th className="pd-b-table-th-1">
              <p>
                <span>
                  <ImageIcon
                    style={{
                      color: "#696966",
                      backgroundColor: "#343434",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                  />
                </span>
                <span
                  style={{
                    color: "#343434",
                    marginLeft: "5px",
                    visibility: "hidden",
                  }}
                >
                  Product Image
                </span>{" "}
              </p>
            </th>
            <th className="pd-b-table-th-1">
              <p>
                <span style={{ color: "#DF0818", visibility: "hidden" }}>
                  <DriveFileRenameOutlineIcon />
                </span>
                <span
                  style={{
                    color: "#343434",
                    marginLeft: "5px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  Product Name
                  <span
                    ref={fullDetails}
                    style={{
                      display: `none`,
                      color: "#696966",
                      fontSize: "12px",
                    }}
                  >
                    Hello this is product name
                  </span>
                </span>
              </p>
            </th>
            <th className="pd-b-table-th-1">
              <p>
                <span style={{ color: "#088F17", visibility: "hidden" }}>
                  <CurrencyRupeeIcon />
                </span>
                <span style={{ color: "#343434", marginLeft: "5px" }}>
                  52,123
                </span>
              </p>
            </th>
            <th className="pd-b-table-th-1">
              <p>
                <span style={{ color: "#088F17" }}>
                  <FiberManualRecordIcon fontSize="small" />
                </span>
                <span style={{ color: "#343434", marginLeft: "5px" }}>
                  Available
                </span>
              </p>
            </th>
            <th className="pd-b-table-th-1">
              <button style={{ backgroundColor: "#427AFF" }}>Edit</button>
              <button style={{ backgroundColor: "#DF0818" }}>Delete</button>
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
