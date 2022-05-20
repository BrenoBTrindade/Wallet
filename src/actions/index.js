// Coloque aqui suas actions
const changeEmail = (email) => ({ type: 'CHANGE_EMAIL', payload: email });

const changeCurrencies = (payload) => ({
  type: 'CHANGE_CURRENCIES', payload,
});

export const changeExpenses = (payload) => ({
  type: 'CHANGE_EXPENSES', payload,
});

export const removeTable = (id) => ({
  type: 'REMOVE_TABLE', id,
});

export function getCurrencies() {
  return async (dispatch) => {
    try {
      const fetchCurr = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await fetchCurr.json();
      dispatch(changeCurrencies(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCurrencyExp(payload) {
  return async (dispatch) => {
    try {
      const fetchCurr = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await fetchCurr.json();
      delete data.USDT;
      dispatch(changeExpenses({ ...payload, exchangeRates: data }));
    } catch (error) {
      console.log(error);
    }
  };
}

export default changeEmail;
