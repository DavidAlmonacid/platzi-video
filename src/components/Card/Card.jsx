import { BASE_IMAGE_URL } from '@/config';
import playIcon from '@assets/icons/play.svg';
import plusIcon from '@assets/icons/plus.svg';
import starIcon from '@assets/icons/star.svg';
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
        <h3 className='card__title'>{card.title || card.name}</h3>

        <section className='card__buttons'>
          <button type='button' className='card__button' title='Reproducir'>
            <img src={playIcon} alt='play icon' className='card__button-icon' />
          </button>

          {/* TODO:
            - Add functionality to the "add to my list" button
          */}
          <button
            type='button'
            className='card__button'
            title='Agregar a mi lista'
          >
            <img src={plusIcon} alt='plus icon' className='card__button-icon' />
          </button>
        </section>

        <div className='card__data'>
          <p className='card__date'>
            {(card.release_date || card.first_air_date).slice(0, 4)}
          </p>
          <p className='card__rating'>
            <img src={starIcon} alt='star icon' className='card__rating-icon' />
            <span>{card.vote_average.toFixed(1)}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
