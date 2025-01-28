import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDetails from "../components/ProductDetails";
import { Product } from "../interfaces/Product";

describe("ProductDetails Component", () => {
  it("renders the product name correctly", () => {
    // Mock product data
    const mockProduct: Product = {
      id: 1,
      productName: "Sample Product",
      quantity: 10,
      configurations: [{ name: "Configuration A" }],
      orderStatus: "Invoice",
      addOns: [],
    };
    render(<ProductDetails product={mockProduct} />);

    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();

  });

  it("renders the configurations correctly", () => {
   
    const mockProduct: Product = {
      id: 1,
      productName: "Sample Product",
      quantity: 10,
      configurations: [{ name: "Configuration A" }, { name: "Configuration B" }],
      orderStatus: "Invoice",
      addOns: [],
    };
  
    
    render(<ProductDetails product={mockProduct} />);
  
    
    expect(screen.getByText("Configuration A | Configuration B")).toBeInTheDocument();
  });

  it("renders the Footer component", () => {
  
    const mockProduct: Product = {
      id: 1,
      productName: "Sample Product",
      quantity: 10,
      configurations: [{ name: "Configuration A" }],
      orderStatus: "Invoice",
      addOns: [],
    };
  
    
    render(<ProductDetails product={mockProduct} />);
  
    
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  
  


});
