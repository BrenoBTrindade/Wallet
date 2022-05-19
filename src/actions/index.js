// Coloque aqui suas actions
const changeEmail = (email) => ({ type: 'CHANGE_EMAIL', payload: email });

const changeCurrencies = (payload) => ({
  type: 'CHANGE_CURRENCIES', payload,
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

export default changeEmail;
