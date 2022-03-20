import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";

const setup = () =>
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

test("Should render home page", () => {
  setup();
  expect(screen.getByText(/IT CLOUD SEA'S IT SERVICE/i)).toBeInTheDocument();
});
