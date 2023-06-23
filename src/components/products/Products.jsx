import React from "react";
import "./Products.css";
import ImageIcon from "@mui/icons-material/Image";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProductDetails from "./productdetails/ProductDetails";

const Products = () => {
  return (
    <div className="products">
      <div className="product_bar_details">
        <div className="product_bar_main">
          <table className="p-b-table-1">
            <tr>
              <th className="p-b-table-th-1">
                <p>
                  <span style={{ color: "#427AFF" }}>
                    <ImageIcon />
                  </span>
                  <span style={{ color: "#343434", marginLeft: "5px" }}>
                    Product Image
                  </span>{" "}
                </p>
              </th>
              <th className="p-b-table-th-1">
                <p>
                  <span style={{ color: "#DF0818" }}>
                    <DriveFileRenameOutlineIcon />
                  </span>
                  <span style={{ color: "#343434", marginLeft: "5px" }}>
                    Product Name
                  </span>
                </p>
              </th>
              <th className="p-b-table-th-1">
                <p>
                  <span style={{ color: "#088F17" }}>
                    <CurrencyRupeeIcon />
                  </span>
                  <span style={{ color: "#343434", marginLeft: "5px" }}>
                    Product Price
                  </span>
                </p>
              </th>
              <th className="p-b-table-th-1">
                <p>
                  <span style={{ color: "#FFBF42" }}>
                    <MoreHorizIcon />
                  </span>
                  <span style={{ color: "#343434", marginLeft: "5px" }}>
                    Product Status
                  </span>
                </p>
              </th>
              <th className="p-b-table-th-1"></th>
            </tr>
          </table>
        </div>
      </div>
      <ProductDetails Pid={112} />
      <ProductDetails Pid={113} />
      <ProductDetails />
      <ProductDetails />
      <ProductDetails />
      <ProductDetails />
      <ProductDetails />
      <ProductDetails />
      <ProductDetails />
      <ProductDetails />
      <ProductDetails />
      <ProductDetails />
    </div>
  );
};

export default Products;
