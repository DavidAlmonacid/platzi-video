import { Link } from 'react-router-dom';
import { LoginButton } from '@components';
import googleLogo from '@assets/icons/google.svg';
import microsoftLogo from '@assets/icons/microsoft.svg';
import appleLogo from '@assets/icons/apple.svg';
import './Login.css';

const Login = () => {
  const authServices = [
    { name: 'Google', imageURL: googleLogo },
    { name: 'Microsoft', imageURL: microsoftLogo },
    { name: 'Apple', imageURL: appleLogo }
  ];

  return (
    <div className='login'>
      <section className='login__container'>
        <header className='login__header'>
          <h3 className='login__title'>Inicia sesión</h3>
        </header>

        <section className='login__buttons'>
          {authServices.map((service) => (
            <LoginButton
              key={service.name}
              service={service.name}
              imageURL={service.imageURL}
            />
          ))}
        </section>

        <div className='login__divider'>
          <p>ó</p>
        </div>

        <form className='form'>
          {/* prettier-ignore */}
          <input
            type='email'
            placeholder='Correo'
            className='form__input'
          />

          <input
            type='password'
            placeholder='Contraseña'
            className='form__input'
          />

          <button type='button' className='form__button form__button--primary'>
            Iniciar sesión
          </button>

          <div className='form__remember'>
            <input
              type='checkbox'
              id='remember'
              className='form__checkbox'
              defaultChecked
            />
            <label htmlFor='remember' className='form__label'>
              Recuérdame
            </label>
          </div>
        </form>

        <footer className='login__footer'>
          <Link to='#' className='login__link'>
            ¿Olvidaste tu contraseña?
          </Link>

          <Link to='#' className='login__link'>
            ¿No tienes una cuenta?
          </Link>
        </footer>
      </section>
    </div>
  );
};

export default Login;
