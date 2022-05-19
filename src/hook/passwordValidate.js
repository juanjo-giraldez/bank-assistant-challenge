/* eslint-disable no-dupe-else-if */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { useState } from 'react';
import { t } from 'i18next';

export const passwordValidate = () => {
  const [password, setPassword] = useState({
    password: '',
    confirmPassword: '',
    strength: -1,
    showPasswordOne: false,
    showPasswordTwo: false,
    match: false,
  });
  const [error, setError] = useState({
    password: '',
    confirmPassword: '',
  });

  const evaluateStrength = (aValue) => {
    if (aValue.length < 8) {
      return 0;
    }
    if (/^[a-zA-Z]+$/i.test(aValue) || /^[0-9]+$/i.test(aValue)) {
      return 1;
    }
    if (/\d/.test(aValue) && /[a-zA-Z]/.test(aValue)) {
      return 2;
    }
    return -1;
  };

  const handleClickShowPassword = (e) => {
    setPassword({ ...password, showPasswordOne: !password.showPasswordOne });
  };
  const handleClickShowPasswordTwo = () => {
    setPassword({ ...password, showPasswordTwo: !password.showPasswordTwo });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const newValue = value;
    const newState = { ...password };
    newState.strength = evaluateStrength(newValue);
    newState[name] = value;
    setPassword(newState);
    validateInput(e);
    match();
    console.log(match());
  };

  const match = () => {
    if (password.password === password.confirmPassword) { return false; }
    return true;
  };

  const validateInput = (e) => {
    const { name, value } = e.target;

    setError((prev) => {
      const stateObj = { ...prev, [name]: '' };
      switch (name) {
        case 'password':
          if (!value) {
            stateObj[name] = t('form.errorPassword');
          } else if (value === password.confirmPassword) {
            stateObj[name] = t('form.macht');
          }
          break;

        case 'confirmPassword':
          if (!value) {
            stateObj[name] = t('form.errorConfirmPassword');
          } else if (value === password.password) {
            stateObj[name] = t('form.macht');
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const setBar = (color) => {
    switch (color) {
      case 'danger':
        return <small className="progress-bar danger" />;

      case 'warning':
        return <small className="progress-bar warning" />;

      case 'success':
        return <small className="progress-bar success" />;

      default:
        break;
    }
  };

  const displayBar = () => {
    if (password.strength === 0) {
      return setBar('danger');
    }

    if (password.strength === 1) {
      return setBar('warning');
    }

    if (password.strength === 2) {
      return setBar('success');
    }
  };

  return {
    password,
    error,
    match,
    displayBar,
    handleOnChange,
    handleClickShowPassword,
    handleClickShowPasswordTwo,
    handleMouseDownPassword,
    validateInput,
  };
};
