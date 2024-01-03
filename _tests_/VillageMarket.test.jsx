import React from "react";
import { render, screen } from "@testing-library/react";
import VillageMarket from "@/components/VillageMarket";
// import userEvent from "@testing-library/user-event";

describe("VillageMarket Component", () => {
  it("renders images, buttons, and links without errors", async () => {
    render(<VillageMarket />);

    const foodCravingsImage = screen.getAllByAltText("Food cravings");
    const giftItemsImage = screen.getByAltText("banana on vendor table");
    expect(foodCravingsImage.length).toBe(3);
    expect(giftItemsImage).toBeInTheDocument();

   
    const findFastFoodButton = screen.getByRole("button", { name: /find fast-food/i });
    const orderNowButton = screen.getByRole("button", { name: /order now/i });
    expect(findFastFoodButton).toBeInTheDocument();
    expect(orderNowButton).toBeInTheDocument();

    // Check for linksrun
    const findFastFoodLink = screen.getByRole("link", { name: /find fast-food/i });
    const orderNowLink = screen.getByRole("link", { name: /order now/i });
    expect(findFastFoodLink).toBeInTheDocument();
    expect(orderNowLink).toBeInTheDocument();

    // // Test button click using userEvent
    // await userEvent.click(findFastFoodButton);
    // await userEvent.click(orderNowButton);

    // // Test link click using userEvent
    // await userEvent.click(findFastFoodLink);
    // await userEvent.click(orderNowLink);
  });
});



