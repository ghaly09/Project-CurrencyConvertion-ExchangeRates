import { useEffect, useState } from "react";

export const useHome = () => {
  const [dataCurrency, setDataCurrency] = useState({});

  useEffect(() => {
    fetch(
      `https://api.currencyfreaks.com/latest?apikey=d98ae12e154144f7a49b35a1fc7565da`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setDataCurrency(result);
      });
  }, []);

  // useEffect(() => {

  // })

  return {
    dataCurrency,
    // setDataCurrency,
  };
};
