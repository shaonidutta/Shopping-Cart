import React from "react";
import "../css/PriceList.css";
import { Box, Typography } from "@mui/material";
import { Price } from "../interfaces/Price";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import tagIcon from "../assets/tag.svg";

interface PriceListProps {
  priceDetails?: Price;
}

const PriceList: React.FC<PriceListProps> = ({ priceDetails }) => {
  if (!priceDetails) {
    return (
      <Box className="price-list">
        <Typography className="price-text">
          No price details available
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="price-list">
      <Box className="price">
        <Typography className="price-text">{priceDetails.price}</Typography>
      </Box>
      <Box className="list-price">
        <Typography className="list-price-text">List Price</Typography>
        <Typography className="list-price-value">
          {priceDetails.listPrice}
        </Typography>
        <Box className="info-icon">
          <InfoOutlinedIcon
            color="primary"
            className="custom-icon"
            data-testid="info-icon"
          />
        </Box>
      </Box>
      <Box className="discount-price-container">
        <Box className="discount-price">
          <Box className="tag">
            <img src={tagIcon} alt="Tag Icon" className="tag-icon" />
          </Box>

          <Typography className="savings">
            You Save {priceDetails.savings}
          </Typography>
          <Typography className="discount-percent">
            {priceDetails.discount}
          </Typography>
        </Box>
      </Box>
      <Typography className="additional-savings">
        {priceDetails.additionalSavings}
      </Typography>
    </Box>
  );
};

export default PriceList;
