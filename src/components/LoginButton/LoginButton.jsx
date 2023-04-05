import { useContext } from 'react';
import { LoginContext } from '@context';
import './LoginButton.css';

const LoginButton = ({ service, imageURL }) => {
  const { toggleIsLogged } = useContext(LoginContext);

  return (
    <button className='login-button' onClick={toggleIsLogged}>
      <picture>
        <img src={imageURL} alt={`${service.toLowerCase()} logo`} />
      </picture>
      <span>Inicia sesión con {service}</span>
    </button>
  );
};

export default LoginButton;
