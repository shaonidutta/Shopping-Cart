import React from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import PriceList from "./PriceList";
import "../css/Layout.css";
import ProductData from "../data/ProductData";
import { Box } from "@mui/material";
import PriceData from "../data/PriceData";

const Layout: React.FC = () => {
  return (
    <Box className="layout">
    {ProductData.map((product) => {
      const priceDetails = PriceData.find(
        (price) => price.productId === product.id
      );

      return (
        <Box key={product.id} className="product-container" data-testid="product-container">
          <ProductList productImage={product.productImage} />
          <ProductDetails product={product} />
          <PriceList priceDetails={priceDetails} />
        </Box>
      );
    })}
  </Box>
  );
};

export default Layout;
