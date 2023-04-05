import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='#'>Contáctanos</Link>
      <Link to='#'>Política de privacidad</Link>
      <Link to='#'>Términos y condiciones</Link>
    </footer>
  );
};

export default Footer;
