import ReactDOM from "react-dom";
import CoinMarketChart from "../CoinMarketChart";

xdescribe("Coin - CoinMarketChart screen tests", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<CoinMarketChart />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {});
});
