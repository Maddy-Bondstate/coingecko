import ReactDOM from "react-dom";
import { config } from "../../../services/config";
import PageNotFound from "../PageNotFound";

describe("PageNotFound component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<PageNotFound />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    const h1 = container.querySelector("h1");
    expect(h1).toBeInTheDocument();

    const p = container.querySelectorAll("p");
    expect(p).toHaveLength(2);

    const span = container.querySelector("span");
    expect(span).toBeInTheDocument();

    const anchor = container.querySelector("a");
    expect(anchor).toBeInTheDocument();
  });

  it("Renders correctly initial document with text", () => {
    const h1 = container.querySelector("h1");
    expect(h1).toHaveTextContent("404");

    const p = container.querySelectorAll("p");
    expect(p[0]).toHaveTextContent("Oops! Page not found");
    expect(p[1]).toHaveTextContent(
      "The page you're looking for doesn't exist."
    );

    const anchor = container.querySelector("a");
    expect(anchor).toHaveTextContent("Go home");
    expect(anchor?.href).toBe(config.baseURL);
  });
});
