// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CHANGE_CURRENCIES':
    return { ...state,
      currencies: Object.keys(action.payload).filter((curr) => curr !== 'USDT'),
    };
  case 'CHANGE_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  case 'REMOVE_TABLE':
    return {
      ...state,
      expenses: [...state.expenses.filter((exp) => exp.id !== action.id)],
    };
  default:
    return state;
  }
};

export default wallet;
