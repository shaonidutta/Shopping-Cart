import { Box, Typography } from '@mui/material';
import React from 'react'
import deleteIcon from "../assets/delete-icon.svg";
import "../css/ProductDetails.css";
import {AddOn} from '../interfaces/AddOn'


  interface AddOnsProps {
    addOns?: AddOn[];
  }
  
  const AddOns: React.FC<AddOnsProps> = ({ addOns }) => {
    return (
      <Box className="add-ons-container">
        <Typography className="add-ons-text">Add-ons</Typography>
        <Box className="add-ons">
          {addOns?.length ? (
            addOns.map((addOn, index) => (
              <Box className="add-ons-space" key={index}>
                <Box className="new-card">
                  <Box className="card-header">
                    <Typography className="add-on-price">
                      + ${addOn.price}
                    </Typography>
                    <img
                      src={deleteIcon}
                      alt="Delete Icon"
                      className="delete-icon"
                    />
                  </Box>
                  <Typography className="add-on-detail">{addOn.detail}</Typography>
                </Box>
              </Box>
            ))
          ) : (
            <Typography>No addOns available</Typography>
          )}
        </Box>
      </Box>
    );
  };
  
  export default AddOns;