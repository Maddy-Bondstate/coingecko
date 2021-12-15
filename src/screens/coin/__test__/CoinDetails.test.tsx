import ReactDOM from "react-dom";
import CoinDetails from "../CoinDetails";

xdescribe("Coin - CoinDetails screen tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<CoinDetails />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {});
});
