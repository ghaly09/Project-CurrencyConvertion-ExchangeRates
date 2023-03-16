import { useHome } from "./home.hook";

const Home = () => {
  const { dataCurrency } = useHome();
  return (
    <div>
      {/* <p>{JSON.stringify(dataCurrency)}</p> */}
      {/* <h3>{dataCurrency.date}</h3> */}
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
              <td></td>
              <td>{dataCurrency.rates && dataCurrency.rates.CAD}</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td></td>
              <td>{dataCurrency.rates && dataCurrency.rates.EUR}</td>
            </tr>
            <tr>
              <td>IDR</td>
              <td></td>
              <td>{dataCurrency.rates && dataCurrency.rates.IDR}</td>
            </tr>
            <tr>
              <td>JPY</td>
              <td></td>
              <td>{dataCurrency.rates && dataCurrency.rates.JPY}</td>
            </tr>
            <tr>
              <td>CHF</td>
              <td></td>
              <td>{dataCurrency.rates && dataCurrency.rates.CHF}</td>
            </tr>
            <tr>
              <td>GBP</td>
              <td></td>
              <td>{dataCurrency.rates && dataCurrency.rates.GBP}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    // <CurrencyFreaks>
    //   <response>
    //     <date>2020-08-11 11:44:00+00</date>
    //     <base>USD</base>
    //     <rates>
    //       <FJD>2.13402</FJD>
    //       <MXN>22.3225</MXN>
    //       <CDF>1947.72</CDF>
    //       <GTQ>7.7</GTQ>
    //       <CLP>805.98</CLP>
    //       <HNL>24.6815</HNL>
    //       <UGX>3667.81</UGX>
    //       <_1INCH>1.6690</_1INCH>
    //     </rates>
    //   </response>
    // </CurrencyFreaks>
  );
};

export default Home;
