import React from "react";
import { render, screen } from "@testing-library/react";
import TopNavigate from "../TopNavigate";
import userEvent from "@testing-library/user-event";

const setup = () => render(<TopNavigate />);

test("Should render top navigation", () => {
  setup();
  expect(screen.getByText("EN")).toBeInTheDocument();
  expect(screen.getByText("Company")).toBeInTheDocument();
  expect(screen.getByText("Partner Market Place")).toBeInTheDocument();
});

test("Should logout", () => {
  setup();
  userEvent.click(screen.getByRole("button", { name: "Log out" }));
  expect(screen.getByText("Log out")).toBeInTheDocument();
});
