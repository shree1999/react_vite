import { customRenderComponent, screen } from "./utils/helper";
import App from "./App";

it("should show title", () => {
  customRenderComponent(<App />);

  expect(screen.getByRole("heading", { name: /react/i })).toBeInTheDocument();
});
