import { useEffect, useState } from 'react';
import { LoginContext } from '../LoginContext';
import { useNavigate } from 'react-router-dom';

const LoginState = ({ children }) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  const toggleIsLogged = () => {
    setIsLogged(!isLogged);
  };

  useEffect(() => {
    isLogged ? navigate('/home') : navigate('/');
  }, [isLogged]);

  return (
    <LoginContext.Provider
      value={{
        isLogged,
        toggleIsLogged
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginState;
