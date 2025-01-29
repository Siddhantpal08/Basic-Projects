import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const lowerCurrency = currency.toLowerCase();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.1.27/v1/currencies/${lowerCurrency}.json`)
      .then((response) => response.json())
      .then((response) => setData(response[lowerCurrency] || {}))
      .catch(() => setData({}));
  }, [lowerCurrency]);

  return data;
}

export default useCurrencyInfo;
