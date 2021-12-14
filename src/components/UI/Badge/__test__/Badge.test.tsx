import ReactDOM from "react-dom";
import Badge from "../Badge";

describe("Badge ui component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Badge name="View Badge" />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    ReactDOM.render(<Badge name="View Badge" className="" />, container);

    const span = container.querySelector("span");
    expect(span).toBeInTheDocument();
  });
});
