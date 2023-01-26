import { cleanup, render } from "@testing-library/react";

const customRenderComponent = (reactComponent, options = {}) =>
  render(reactComponent, { wrapper: ({ children }) => children, ...options });

afterEach(() => {
  cleanup();
});

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRenderComponent };
