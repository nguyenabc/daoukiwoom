import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../Login";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const setup = () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const inputUserName = screen.getAllByPlaceholderText("username");
  const inputPassword = screen.getAllByPlaceholderText("password");

  return {
    inputUserName,
    inputPassword,
  };
};

test("Should render login form", () => {
  setup();
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test("Show error message when not input user name or password", () => {
  setup();
  userEvent.click(screen.getByRole("button", { name: "login" }));

  expect(screen.getByText("* Please input your username.")).toBeInTheDocument();
  expect(screen.getByText("* Please input your password.")).toBeInTheDocument();
});
