import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../test/test-utils";

import { Loading } from "./Loading";

describe('Component - Loading', () => {
test("render", async () => {
  render(<Loading />);
  expect(screen.getByTestId("loading")).toHaveTextContent("Loading . . .");
});
});