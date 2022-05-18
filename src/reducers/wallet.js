// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CHANGE_WALLET':
    return { ...state,
      currencies: [state.currencies, action.payload],
      expenses: [state.expenses, action.payload] };
  default:
    return state;
  }
};

export default wallet;
