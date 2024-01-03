import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
 
import Home from "../src/pages/index";

// Mock the CartContext module
jest.mock("../src/contexts/CartContext", () => ({
  useCart: jest.fn().mockReturnValue({
    cartItems: [], // Provide a mock value for cartItems
  }),
}));

describe('Home Page', () => {
  describe('Rendering', () => {
    it('should render the Home Page', () => {
      render(<Home />);
      // Add assertions if needed
    });
  });

  describe('Subcomponents Rendering', () => {
    it('renders all subcomponents without errors', () => {
      render(<Home />);
      
      // Check if each subcomponent is rendered
      expect(screen.getByText('How it Works')).toBeInTheDocument();
      
    });

    it('renders Sign In and Sign Up buttons', () => {
      render(<Home />);
      
  
      expect(screen.getByText('Sign in')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
      const buttons = screen.getAllByRole("button", { name: "Start Search" });
      expect(buttons.length).toBe(2);
      expect(screen.getByRole('button', {name: 'Order Now'})).toBeInTheDocument();

    });
    it('renders Images on VillageMarket Components', () => {
      render(<Home />);
      const foodCraving = screen.getAllByAltText("Food cravings");
      expect(foodCraving.length).toBe(3);
      
    });
  });
});

