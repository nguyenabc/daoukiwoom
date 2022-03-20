import React from "react";
import { render, screen } from "@testing-library/react";
import KoreaOffice from "../KoreaOffice";

const setup = () => render(<KoreaOffice />);

test("Should render Korean office", () => {
  setup();
  expect(screen.getByText(/Korea Office/i)).toBeInTheDocument();
});
