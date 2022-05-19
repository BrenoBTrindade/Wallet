import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpense = expenses.reduce((prev, current) => {
      const realValue = Number(current.exchangeRates[current.currency].ask);
      const convertedValue = Number(current.value) * realValue;
      prev += convertedValue;
      return prev;
    }, 0);

    return (
      <header>
        <h1>
          TrybeWallet
        </h1>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{totalExpense.toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Header);
