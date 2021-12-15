import ReactDOM from "react-dom";
import HeaderStats from "../HeaderStats";

describe("HeaderStats component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<HeaderStats />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {});

  it("Renders correctly initial document with text", () => {});
});
