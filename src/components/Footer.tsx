import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";
import "../css/Footer.css";
import deleteIcon from "../assets/delete-icon.svg";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer-space">
        <Box className="update-config">
          <Link underline = "none" className="update-config-text">
            Update Configuration
          </Link>
        </Box>
        <Box className="line" />
        <Box className="delete-product-space">
          <Box className="delete-product">
            <img src={deleteIcon} alt="Delete Icon" className="delete-icon" />
            <Typography className="delete-product-text">
              Delete this product
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
