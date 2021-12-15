import ReactDOM from "react-dom";
import CoinList from "../CoinList";

xdescribe("Coin - CoinList screen tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<CoinList />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {});
});
