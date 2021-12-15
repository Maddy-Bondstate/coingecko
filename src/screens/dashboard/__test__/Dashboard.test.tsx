import ReactDOM from "react-dom";
import Dashboard from "../Dashboard";

describe("Dashboard screen tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Dashboard />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {});

  it("Renders correctly initial document with text", () => {});
});
