import { BASE_IMAGE_URL } from '@/config';
import './Card.css';

const Card = ({ card }) => {
  return (
    <article key={card.id} className='card'>
      <picture className='card__image-wrapper'>
        <img
          src={BASE_IMAGE_URL + card.poster_path}
          alt={card.title || card.name}
          width={200}
          className='card__image'
        />
      </picture>

      <div className='card__info'>
        <p className='card__title'>{card.title || card.name}</p>
        <p className='card__date'>{card.release_date || card.first_air_date}</p>
      </div>
    </article>
  );
};

export default Card;
