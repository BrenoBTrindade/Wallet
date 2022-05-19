import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, getCurrencyExp } from '../actions';
import Header from '../component/Header';
import './Wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      method: '',
      tag: '',
      description: '',
    };
  }

  componentDidMount() {
    const { fetchCurr } = this.props;
    fetchCurr();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      currencies,
      getCurrency,
    } = this.props;
    const {
      value,
      currency,
      method,
      tag,
      description } = this.state;
    const expensesValues = {
      value,
      currency,
      method,
      tag,
      description };

    return (
      <main>
        <div className="header">
          <Header />
        </div>
        <form className="form-wallet">
          <label htmlFor="value">
            Valor:
            {' '}
            <input
              type="number"
              id="value"
              name="value"
              value={ value }
              onChange={ this.handleChange }
              data-testid="value-input"
            />
          </label>
          <label htmlFor="curr">
            Moeda
            {' '}
            <select
              id="curr"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencies.map((coin) => (
                <option
                  key={ coin }
                >
                  {coin}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            {' '}
            <select
              id="method"
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            <select
              data-testid="tag-input"
              id="tag"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <input
            type="text"
            data-testid="description-input"
            placeholder="Descrição"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />

          <button
            type="button"
            onClick={ () => {
              getCurrency(expensesValues);
              this.setState({
                value: '',
              });
            } }
          >
            Adicionar despesa
          </button>
        </form>
        <div className="table-wallet">
          <table className="table">
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </table>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurr: () => dispatch(getCurrencies()),
  getCurrency: (expenses) => dispatch(getCurrencyExp(expenses)),
});

Wallet.propTypes = {
  fetchCurr: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
