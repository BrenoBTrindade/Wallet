import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.buttonDisabled();
  }

  buttonDisabled = () => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;
    const { password, email } = this.state;
    const min = 4;
    return (password.length > min && emailRegex.test(email)
      ? this.setState({ disabled: false })
      : this.setState({ disabled: true }));
  }

  onButtonClick = () => {
    const { history, changeEmailToProps } = this.props;
    const { email } = this.state;
    changeEmailToProps(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <main>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          disabled={ disabled }
          onClick={ this.onButtonClick }
        >
          Entrar
        </button>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeEmailToProps: (email) => {
    dispatch(changeEmail(email));
  },
});
export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  changeEmailToProps: PropTypes.func.isRequired,
};
