import ReactDOM from "react-dom";
import { config } from "../../../services/config";
import Navbar from "../Navbar";

describe("Navbar component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Navbar />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    const anchor = container.querySelector("a");
    expect(anchor).toBeInTheDocument();

    const ul = container.querySelector("ul");
    expect(ul).toBeInTheDocument();

    const h4 = container.querySelector("h4");
    expect(h4).toBeInTheDocument();
  });

  it("Renders correctly initial document with text", () => {
    const anchor = container.querySelector("a");
    expect(anchor).toHaveTextContent("Dashboard");
    expect(anchor?.href).toBe(config.baseURL);

    const h4 = container.querySelector("h4");
    expect(h4).toHaveTextContent("Hi Buddy,");
  });
});
