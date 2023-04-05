import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__image' />

      <div className='hero__title-wrapper'>
        <h1 className='hero__title'>
          Tu nuevo destino para disfrutar <span>películas</span>,{' '}
          <span>series</span> y <span>documentales</span> en línea
        </h1>
      </div>

      <div className='hero__link-wrapper'>
        <Link to='/login' role='button' className='hero__link'>
          Inicia sesión
        </Link>
      </div>
    </div>
  );
};

export default Hero;
