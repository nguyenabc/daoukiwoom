import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Login from "../Login";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const setup = () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

const signIn = (user) => {
  if (user?.userName === "user1" && user?.passWord === "password") {
    return true;
  }
  return false;
};

jest.mock("../../../hooks/useAuth", () => ({
  useAuth: () => ({
    signIn,
  }),
}));

test("Should render login form", () => {
  setup();
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test("Should show error message when not input username or password", () => {
  setup();
  userEvent.click(screen.getByRole("button", { name: "login" }));

  expect(screen.getByText("* Please input your username.")).toBeInTheDocument();
  expect(screen.getByText("* Please input your password.")).toBeInTheDocument();
});

test("Should keep value in front of input username", () => {
  setup();

  userEvent.type(screen.getByPlaceholderText("username"), "Robert");
  expect(screen.getByPlaceholderText("username")).toHaveValue("Robert");
});

test("Should keep value in front of input password", () => {
  setup();

  userEvent.type(screen.getByPlaceholderText("password"), "password");
  expect(screen.getByPlaceholderText("password")).toHaveValue("password");
});

test("Should show error message when user input wrong username or password", async () => {
  setup();

  userEvent.type(screen.getByPlaceholderText("username"), "Robert");
  userEvent.type(screen.getByPlaceholderText("password"), "password");
  userEvent.click(screen.getByRole("button", { name: "login" }));

  await waitFor(() => {
    expect(
      screen.getByText(
        "* Your username or password is not correct. Please check again!"
      )
    ).toBeInTheDocument();
  });
});
