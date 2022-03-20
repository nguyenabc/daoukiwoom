import React from "react";
import { render, screen } from "@testing-library/react";
import IndoOffice from "../IndoOffice";

const setup = () => render(<IndoOffice />);

test("Should render Indo office", () => {
  setup();
  expect(screen.getByText(/Indonesia Office/i)).toBeInTheDocument();
});
