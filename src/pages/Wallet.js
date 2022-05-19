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
    const { email } = this.props;
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
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurr: () => dispatch(getCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCurr: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
