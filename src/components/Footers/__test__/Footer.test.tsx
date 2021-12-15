import ReactDOM from "react-dom";
import { config } from "../../../services/config";
import Footer from "../Footer";

describe("Footer component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Footer />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    const anchor = container.querySelector("a");
    expect(anchor).toBeInTheDocument();
  });

  it("Renders correctly initial document with text", () => {
    const anchor = container.querySelector("a");
    expect(anchor).toHaveTextContent("Coin Gecko");
    expect(anchor?.href).toBe(config.baseURL);
  });
});
