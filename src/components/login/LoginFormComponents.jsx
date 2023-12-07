import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../../api/request';
import Loader from '../ui/Loader';
export default function LoginForm() {
  const dispatch = useDispatch();
  const emailInputValue = useSelector((state) => state.emailForm);
  const passwordInputValue = useSelector((state) => state.passwordForm);
  const loaderLoginIsTrue  = useSelector((state) => state.loaderLoginIsTrue)
  const isAnyFieldEmpty = emailInputValue === '' || passwordInputValue === '';
  const buttonClass = isAnyFieldEmpty ? 'signUp__button disabled' : 'signUp__button';

  const handleEmailInputChange = (event) => {
    dispatch({ type: 'SET_EMAIL', value: event.target.value });
  };

  const handlePasswordInputChange = (event) => {
    dispatch({ type: 'SET_PASSWORD', value: event.target.value });
  };
  const handleLoginButtonClick = async () => {
    const formData = {
      email: emailInputValue,
      password: passwordInputValue,
    };

    try {
      const signUpResponse = await signUp(formData);
      dispatch({ type: 'SET_STATUS_LOGI_LOADER', value: true})
      dispatch({ type: 'SET_EMAIL', value: '' });
      dispatch({ type: 'SET_PASSWORD', value: '' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='LoginForm__container'>
      <div className="LoginForm__container-content">
        <div className="LoginForm__content-login form">
          <p>Email</p>
          <input type="text" value={emailInputValue} onChange={handleEmailInputChange} />
        </div>
        <div className="LoginForm__content-password form">
          <p>Password</p>
          <input type="password" value={passwordInputValue} onChange={handlePasswordInputChange} />
        </div>
        <div className="LoginForm__content-button form">
          <button className={buttonClass} onClick={handleLoginButtonClick} disabled={isAnyFieldEmpty}>
            <p>Sign In</p>
          </button>
        </div>
      </div>
      <div className={!loaderLoginIsTrue ? 'loader__disabled' : "loader__active"}>
        <Loader />
      </div>
    </div>
  );
}
