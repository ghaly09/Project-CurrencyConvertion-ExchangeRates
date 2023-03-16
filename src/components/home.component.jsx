import { useHome } from "./home.hook";

const Home = () => {
  // const { dataCurrency } = useHome();
  const { CAD, EUR, IDR, JPY, CHF, GBP } = useHome();

  return (
    <div>
      {/* <p>{JSON.stringify(dataCurrency)}</p> */}

      <h2 className="title">Exchange Rates Currency</h2>
      <div className="tableCurrency">
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>We Buy</th>
              <th>Exchange Rate</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAD</td>
              <td>{Number(CAD) + (5 / 100) * Number(CAD)}</td>
              <td>{CAD}</td>
              <td>{Number(CAD) - (5 / 100) * Number(CAD)}</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>{Number(EUR) + (5 / 100) * Number(EUR)}</td>
              <td>{EUR}</td>
              <td>{Number(EUR) - (5 / 100) * Number(EUR)}</td>
            </tr>
            <tr>
              <td>IDR</td>
              <td>{Number(IDR) + (5 / 100) * Number(IDR)}</td>
              <td>{IDR}</td>
              <td>{Number(IDR) - (5 / 100) * Number(IDR)}</td>
            </tr>
            <tr>
              <td>JPY</td>
              <td>{Number(JPY) + (5 / 100) * Number(JPY)}</td>
              <td>{JPY}</td>
              <td>{Number(JPY) - (5 / 100) * Number(JPY)}</td>
            </tr>
            <tr>
              <td>CHF</td>
              <td>{Number(CHF) + (5 / 100) * Number(CHF)}</td>
              <td>{CHF}</td>
              <td>{Number(CHF) - (5 / 100) * Number(CHF)}</td>
            </tr>
            <tr>
              <td>GBP</td>
              <td>{Number(GBP) + (5 / 100) * Number(GBP)}</td>
              <td>{GBP}</td>
              <td>{Number(GBP) - (5 / 100) * Number(GBP)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="tagline">
        Rates are based from 1 USD <br /> This application uses API from{" "}
        <a href="https://currencyfreaks.com/">currencyfreaks.com</a>
      </p>
      <p className="author">Designed By Rachmat Ghaly</p>
    </div>
  );
};

export default Home;
