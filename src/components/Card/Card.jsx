/* eslint-disable multiline-ternary */
import { useContext } from 'react';
import { MyListContext } from '@context';
import { BASE_IMAGE_URL } from '@/config';
import minusIcon from '@assets/icons/minus.svg';
import playIcon from '@assets/icons/play.svg';
import plusIcon from '@assets/icons/plus.svg';
import starIcon from '@assets/icons/star.svg';
import './Card.css';

const Card = ({ card }) => {
  const { addMedia, removeMedia } = useContext(MyListContext);

  return (
    <article className='card'>
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

          {!card.is_added ? (
            <button
              type='button'
              className='card__button'
              title='Agregar a mi lista'
              onClick={() => addMedia(card)}
            >
              <img
                src={plusIcon}
                alt='plus icon'
                className='card__button-icon'
              />
            </button>
          ) : (
            <button
              type='button'
              className='card__button'
              title='Eliminar de mi lista'
              onClick={() => removeMedia(card)}
            >
              <img
                src={minusIcon}
                alt='minus icon'
                className='card__button-icon'
              />
            </button>
          )}
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
