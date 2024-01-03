import React from "react";
import { render, screen } from "@testing-library/react";
import ExploreMarket from "@/components/ExploreMarket";

describe("ExploreMarket Component", () => {
  it("renders carousel slides with images and text", () => {
    jest.mock("../src/components/IsMobile", () => {
      return jest.fn(() => true);
    });

    render(<ExploreMarket isMobile={true} />);

    // Check for carousel slides
    const mobileImageSlide = screen.getAllByAltText("Explore village market");
    expect(mobileImageSlide.length).toBe(5);


    
  });
});
