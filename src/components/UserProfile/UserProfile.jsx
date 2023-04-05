import { useContext } from 'react';
import { LoginContext } from '@context';
import avatar from '@assets/images/avatar.jpg';
import './UserProfile.css';

const UserProfile = () => {
  const { toggleIsLogged } = useContext(LoginContext);

  return (
    <div className='user'>
      <figure className='user__info'>
        <figcaption>David</figcaption>

        <img
          src={avatar}
          alt="David's profile picture"
          className='user__avatar'
        />
      </figure>

      <div className='user__logout-wrapper'>
        <div className='user__logout'>
          <button
            type='button'
            className='user__logout-button'
            onClick={toggleIsLogged}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
