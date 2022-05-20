import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

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
      <header className="header-form">
        <div className="title">
          <h1>
            MyWallet
          </h1>
          <img src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-wallet-icon-png-image_3989626.jpg" alt="carteira" />
        </div>
        <div>
          <h3 data-testid="email-field">{email}</h3>
          <div className="info-header">
            <p data-testid="total-field">{totalExpense.toFixed(2)}</p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </div>
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
