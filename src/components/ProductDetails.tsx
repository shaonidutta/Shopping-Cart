import React from "react";
import "../css/ProductDetails.css";
import InvoiceButton from "./Button";
import { Box, Typography, Container } from "@mui/material";
import Footer from "./Footer";
import { Product } from "../interfaces/Product";
import AddOns from "./AddOns";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const formattedConfigurations = product.configurations
    .map((config) => config.name)
    .join(" | ");
  return (
    <Container className="product-details">
      <Box className="header">
        <InvoiceButton orderStatus={product.orderStatus} />
        <Box className="Product-name">
          <Typography className="Product-name-text">
            {product.productName}
          </Typography>
        </Box>
      </Box>
      <Box className="quantity">
        <Typography className="quantity-text">
          Quantity (no. of invoices)
        </Typography>
      </Box>
      <Box className="quantity-input">
        <Typography className="quantity-input-text">
          {product.quantity}
        </Typography>
        <Typography className="quantity-input-text">invoices</Typography>
      </Box>
      <Box className='line1'
        
      />
      <Box className="configuration">
        <Typography className="configuration-text">Configurations</Typography>
      </Box>
      <Box className="config-input">
        <Typography className="config-input-text">
          {formattedConfigurations}
        </Typography>
      </Box>

      <Box className='line2'
        sx={{
          width: "674px",
          height: "0px",
          border: "1px solid #D9DFE6",
          transform: "rotate(180deg)",
          flex: "none",
          order: 5,
          flexGrow: 0,
        }}
      />

      {product.addOns?.length ? <AddOns addOns={product.addOns} /> : null}

      <Footer />
    </Container>
  );
};

export default ProductDetails;
