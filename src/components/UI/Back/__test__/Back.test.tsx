import ReactDOM from "react-dom";
import Back from "../Back";

describe("Back ui component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Back to="/" />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    ReactDOM.render(<Back to="/" className="" />, container);

    const anchor = container.querySelector("a");
    expect(anchor).toBeInTheDocument();

    const icon = container.querySelector("i");
    expect(icon).toBeInTheDocument();
  });

  it("Renders correctly initial document with className", () => {
    const icon = container.querySelector("i")?.getAttribute("class");
    expect(icon).toBe("fas fa-arrow-left");
  });
});
