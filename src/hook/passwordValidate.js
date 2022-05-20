/* eslint-disable no-dupe-else-if */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { t } from 'i18next';

export const passwordValidate = () => {
  const [match, setMatch] = useState({ match:null });
  const [password, setPassword] = useState({
    password: '',
    confirmPassword: '',
    commentClue: '',
    strength: -1,
    showPasswordOne: false,
    showPasswordTwo: false,
    match: null,
    passwordError: '',
    confirmPasswordError: '',
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
  };

  const validateInput = (e) => {
    const { name, value } = e.target;

    setPassword((prev) => {
      const newName = `${name}Error`;
      const stateObj = { ...prev, [newName]: '' };
      switch (name) {
        case 'password':
          if (!value) {
            stateObj[newName] = t('form.errorPassword');
            setMatch(false);
          } else if (value === password.confirmPassword) {
            setMatch(true);
          } else if (value !== password.confirmPassword) {
            setMatch(false);
          }
          break;

        case 'confirmPassword':
          if (!value) {
            stateObj[newName] = t('form.errorConfirmPassword');
            setMatch(false);
          } else if (value === password.password) {
            stateObj[newName] = t('form.macht');
            setMatch(true);
          } else if (value !== password.password) {
            setMatch(false);
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
    displayBar,
    handleOnChange,
    handleClickShowPassword,
    handleClickShowPasswordTwo,
    handleMouseDownPassword,
    validateInput,
  };
};
