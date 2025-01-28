import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import ProductData from "../data/ProductData";
import PriceData from "../data/PriceData";

describe("Layout Component", () => {
  it("renders the Layout component with product details", () => {
    render(<Layout />);

    // if each product from ProductData is rendered
    ProductData.forEach((product) => {
      expect(screen.getByText(product.productName)).toBeInTheDocument();
    });

    //if associated prices from PriceData are rendered
    // PriceData.forEach((price) => {
    //   if (price.price) {
    //     expect(screen.getByText(`$${price.price.toFixed(2)}`)).toBeInTheDocument();
    //   }
    // });
  });

  it("renders the correct number of product containers", () => {
    render(<Layout />);  
    const productContainers = screen.getAllByTestId("product-container");
    expect(productContainers.length).toBe(ProductData.length);
  });
});
