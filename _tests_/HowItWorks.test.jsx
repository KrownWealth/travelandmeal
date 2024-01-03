import React from "react";
import { render, screen } from "@testing-library/react";
import HowItWorks from "@/components/HowItWorks";


describe("HowItWorks Component", () => {
  it("renders images without errors", () => {
    render(<HowItWorks />);
    const searchImage = screen.getByAltText("search for fast-food, cuisines, and dishes");
    const orderImage = screen.getByAltText("order and make payment");
    const serveImage = screen.getByAltText("get your food serve");

    expect(searchImage).toBeInTheDocument();
    expect(orderImage).toBeInTheDocument();
    expect(serveImage).toBeInTheDocument();
  });
});
