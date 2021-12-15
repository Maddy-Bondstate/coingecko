import ReactDOM from "react-dom";
import CoinMarkets from "../CoinMarkets";

xdescribe("Coin - CoinMarkets screen tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<CoinMarkets />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {});
});
