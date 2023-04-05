import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '@context';
import { UserProfile } from '@components';
import platziVideoLogo from '@assets/icons/logo.svg';
import './Header.css';

const Header = () => {
  const { isLogged } = useContext(LoginContext);

  return (
    <header className='header'>
      <Link to={isLogged ? '/home' : '/'}>
        <picture>
          <img
            src={platziVideoLogo}
            alt='platzi video logo'
            className='header__logo'
          />
        </picture>
      </Link>

      {isLogged && <UserProfile />}
    </header>
  );
};

export default Header;
