import React from "react";
import { render, screen } from "@testing-library/react";
import VietNamOffice from "../VietNamOffice";

const setup = () => render(<VietNamOffice />);

test("Should render Viet Nam office", () => {
  setup();
  expect(screen.getByText(/Vietnam Office/i)).toBeInTheDocument();
});
