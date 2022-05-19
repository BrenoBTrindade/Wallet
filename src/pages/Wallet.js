import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurr } = this.props;
    fetchCurr();
  }

  render() {
    const { email, currencies } = this.props;
    return (
      <main>
        <header>
          <h1>
            TrybeWallet
          </h1>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="valuer">
            Valor:
            <input
              type="number"
              id="value"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="curr">
            Moeda
            <select id="curr">
              {currencies.map((currency, i) => (
                <option
                  key={ i }
                >
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select
              id="method"
              data-testid="method-input"
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
          />
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurr: () => dispatch(getCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCurr: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
