import { customRenderComponent, screen, userEvent } from "../utils/helper";
import UserForm from "./UserForm";

it("should display two inputs and button", async () => {
  customRenderComponent(<UserForm />);

  const textInputElement = await screen.findByRole("textbox", {
    name: /name/i,
  });
  const emailInputElement = await screen.findByRole("textbox", {
    name: /email/i,
  });
  const buttonElement = await screen.findByRole("button");

  expect(textInputElement).toBeInTheDocument();
  expect(emailInputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

it("should set name and email correctly", async () => {
  const mock = vi.fn();

  customRenderComponent(<UserForm onAddUser={mock} />);

  const textInputElement = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  await userEvent.click(textInputElement);
  await userEvent.keyboard("john");

  await userEvent.click(emailInputElement);
  await userEvent.keyboard("john@gmail.com");

  await userEvent.click(button);

  expect(mock).toHaveBeenCalled();
});
