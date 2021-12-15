import ReactDOM from "react-dom";
import Sidebar from "../Sidebar";

xdescribe("Sidebar component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Sidebar />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    // const nav = container.querySelector("nav");
    // expect(nav).toBeInTheDocument();
  });

  it("Renders correctly initial document with className", () => {
    // const icon = container.querySelector("i")?.getAttribute("class");
    // expect(icon).toBe("fas fa-arrow-left");
  });
});
