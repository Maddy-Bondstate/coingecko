import ReactDOM from "react-dom";
import { Menu } from "../Menu";

xdescribe("Sidebar - Menu component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <Menu name="Dashboard" url="/" icon="fa-chart-line" />,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    // const li = container.querySelector("li");
    // expect(li).toBeInTheDocument();
  });

  it("Renders correctly initial document with className", () => {
    // const icon = container.querySelector("i")?.getAttribute("class");
    // expect(icon).toBe("fas fa-arrow-left");
  });
});
