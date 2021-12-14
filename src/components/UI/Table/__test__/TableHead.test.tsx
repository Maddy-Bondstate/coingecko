import ReactDOM from "react-dom";
import TableHead from "../TableHead";

describe("Table Head ui component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("tr");
    document.body.appendChild(container);
    ReactDOM.render(<TableHead name="table head" />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    ReactDOM.render(<TableHead name="table head" className="" />, container);

    const th = container.querySelector("th");
    expect(th).toBeInTheDocument();
  });
});
