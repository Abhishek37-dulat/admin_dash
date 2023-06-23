import React from "react";
import "./UpdateForm.css";
import { TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import BackupIcon from "@mui/icons-material/Backup";
import Empty from "../../assets/empty.jpg";
import UpdateIcon from "@mui/icons-material/Update";

const UpdateForm = () => {
  return (
    <div className="form-page">
      <div className="form-page-main">
        <div className="form-page-title">
          <p>UPDATE PRODUCT DETAILS </p>
        </div>
        <div className="form-box-1">
          <div className="box-1-for-image">
            <div className="for-imagecover">
              <img src={Empty} alt="" />
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                Update Image{" "}
              </p>
            </div>
          </div>
          <div className="box-1-for-textfields">
            <div className="box-product-name">
              <TextField
                required
                id="filled-required"
                label="Product Name"
                variant="filled"
                style={{
                  backgroundColor: "#fff",
                  width: "80%",
                  marginLeft: "30px",
                }}
                type="text"
              />
            </div>
            <div className="box-product-title">
              <TextField
                required
                id="filled-required"
                label="Product Title"
                variant="filled"
                style={{
                  backgroundColor: "#fff",
                  width: "80%",
                  marginLeft: "30px",
                }}
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="form-box-2">
          <div className="box-product-description">
            <TextField
              required
              id="filled-required"
              label="Product Description"
              variant="filled"
              style={{
                backgroundColor: "#fff",
                width: "80%",
                marginLeft: "30px",
              }}
              type="text"
              inputProps={{
                style: {
                  height: "80px",
                  padding: "0 14px",
                },
              }}
              multiline={true}
            />
          </div>
        </div>
        <div className="form-box-3">
          <div className="box-product-price">
            <div className="box-product-price-mrp">
              <TextField
                required
                id="filled-required"
                label="Product MRP"
                variant="filled"
                style={{
                  backgroundColor: "#fff",
                  width: "50%",
                  marginLeft: "30px",
                }}
                type="number"
              />
            </div>
            <div className="box-product-price-cost">
              <TextField
                required
                id="filled-required"
                label="Product Selling Price"
                variant="filled"
                style={{
                  backgroundColor: "#fff",
                  width: "50%",
                  marginLeft: "30px",
                }}
                type="number"
              />
            </div>
          </div>
        </div>
        <div className="form-box-4">
          <div className="box-product-quan">
            <TextField
              required
              id="filled-required"
              label="Product Quantity"
              variant="filled"
              style={{
                backgroundColor: "#fff",
                width: "80%",
                marginLeft: "30px",
              }}
              type="number"
            />
          </div>
        </div>
        <div className="form-box-5">
          <div className="box-product-discount">
            <TextField
              required
              id="filled-required"
              label="Product Discount"
              variant="filled"
              style={{
                backgroundColor: "#fff",
                width: "25%",
                marginLeft: "30px",
              }}
              type="number"
            />
          </div>
        </div>
        <div className="form-box-6">
          <div className="box-product-tags">
            <TextField
              required
              id="filled-required"
              label="Product Tag Line"
              variant="filled"
              style={{
                backgroundColor: "#fff",
                width: "80%",
                marginLeft: "30px",
              }}
              type="text"
            />
          </div>
        </div>
        <div className="form-box-7">
          <div
            className="box-product-buttons"
            style={{ justifyContent: "flex-end" }}
          >
            <div className="box-product-button-cancle">
              <button style={{ backgroundColor: "#DF0818" }}>
                <p>
                  <span>
                    <CancelIcon />
                  </span>
                  <span style={{ marginLeft: "5px" }}>Cancel</span>
                </p>{" "}
              </button>
            </div>
            <div className="box-product-button-reset">
              <button style={{ backgroundColor: "#FFBF42" }}>
                <p>
                  <span>
                    <RestartAltIcon />
                  </span>
                  <span style={{ marginLeft: "5px" }}>Reset</span>
                </p>{" "}
              </button>
            </div>
            <div className="box-product-button-submit">
              <button style={{ backgroundColor: "#427AFF" }}>
                <p>
                  <span>
                    <UpdateIcon />
                  </span>
                  <span style={{ marginLeft: "5px" }}>Update</span>
                </p>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
