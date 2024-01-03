import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TopRestaurants from "@/components/TopRestaurants";


describe("TopRestaurants Component", () => {
  it("renders top restaurants with correct data", () => {
    render(<TopRestaurants />);

    const heading1 = screen.getByText(/Top Fast-Food/i);
    const heading2 = screen.getByText(/Popular Roadside Fast-food/i);
    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    const locationButton = screen.getByRole("button", { name: /lagos-benin expressway, ore/i });
    expect(locationButton).toBeInTheDocument();

    const loadMoreButton = screen.getByRole("button", { name: /load more fast-food/i });
    expect(loadMoreButton).toBeInTheDocument();
  });

  it("loads more restaurants when 'Load More Fast-food' button is clicked", () => {
    render(<TopRestaurants />);

    const loadMoreButton = screen.getByRole("button", { name: /load more fast-food/i });
    fireEvent.click(loadMoreButton);
  });
});
