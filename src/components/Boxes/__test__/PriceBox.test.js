import React from "react";
import { render, screen } from "@testing-library/react";
import PriceBox from "../PriceBox";

const setup = () =>
  render(
    <PriceBox
      title={"Price"}
      currency={"$"}
      hint="best price"
      price={"200,000"}
      time={"year"}
    />
  );

test("Should render price box", () => {
  setup();
  expect(screen.getByText("Price")).toBeInTheDocument();
  expect(screen.getByText("$")).toBeInTheDocument();
  expect(screen.getByText("best price")).toBeInTheDocument();
  expect(screen.getByText("200,000")).toBeInTheDocument();
  expect(screen.getByText("Per year")).toBeInTheDocument();
});
