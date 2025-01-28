import React from "react";
import { render, screen } from "@testing-library/react";
import PriceList from "../components/PriceList";
import { Price } from "../interfaces/Price";

describe("PriceList Component", () => {
  it("should render 'No price details available' if no priceDetails are provided", () => {
    render(<PriceList />);
    expect(screen.getByText(/No price details available/i)).toBeInTheDocument();
  });

  it("should render price details when provided", () => {
    const priceDetails: Price = {
      price: "$100",
      listPrice: "$150",
      savings: "$50",
      discount: "33%",
      additionalSavings: "Extra $10 off",
    };

    render(<PriceList priceDetails={priceDetails} />);

    // Check if price is rendered
    expect(screen.getByText("$100")).toBeInTheDocument();

    // Check if list price is rendered
    expect(screen.getByText("List Price")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();

    // Check if savings and discount are rendered
    expect(screen.getByText("You Save $50")).toBeInTheDocument();
    expect(screen.getByText("33%")).toBeInTheDocument();

    // Check if additional savings are rendered
    expect(screen.getByText("Extra $10 off")).toBeInTheDocument();
  });

  it("should render the info icon", () => {
    const priceDetails: Price = {
      price: "$100",
      listPrice: "$150",
      savings: "$50",
      discount: "33%",
      additionalSavings: "Extra $10 off",
    };

    render(<PriceList priceDetails={priceDetails} />);

    const infoIcon = screen.getByTestId("info-icon");
    expect(infoIcon).toBeInTheDocument();
  });

  it("should render the tag icon", () => {
    const priceDetails: Price = {
      price: "$100",
      listPrice: "$150",
      savings: "$50",
      discount: "33%",
      additionalSavings: "Extra $10 off",
    };

    render(<PriceList priceDetails={priceDetails} />);

    const tagIcon = screen.getByAltText("Tag Icon");
    expect(tagIcon).toBeInTheDocument();
  });
});
