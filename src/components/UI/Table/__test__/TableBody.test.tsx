import ReactDOM from "react-dom";
import TableBody from "../TableBody";

describe("Table Body ui component tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("tr");
    document.body.appendChild(container);
    ReactDOM.render(<TableBody />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    ReactDOM.render(<TableBody name="table body" />, container);
    ReactDOM.render(<TableBody name="table body" className="" />, container);
    ReactDOM.render(<TableBody>children</TableBody>, container);

    const td = container.querySelector("td");
    expect(td).toBeInTheDocument();
  });
});
