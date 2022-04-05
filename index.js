const cards = document.querySelectorAll('.card')
cards.forEach((card, index) => {
  card.style.backgroundImage = `url(https://picsum.photos/175/225?random=${index})`
})

const cardsContent = document.querySelectorAll('.card__content')
cardsContent.forEach((cardContent) => {
  const playIcon = cardContent.appendChild(new Image())
  playIcon.src = 'https://i.imgur.com/SgB9Yu8.png'
  playIcon.alt = 'Play icon'

  if (!cardContent.parentElement.className.includes('myListCard')) {
    const plusIcon = cardContent.appendChild(new Image())
    plusIcon.src = 'https://i.imgur.com/YytNeGR.png'
    plusIcon.alt = 'Plus icon'
  }

  const title = cardContent.appendChild(document.createElement('p'))
  title.className = 'card__title'
  title.textContent = 'Título'

  const data = cardContent.appendChild(document.createElement('div'))
  data.className = 'card__data'

  const year = data.appendChild(document.createElement('p'))
  year.textContent = 2021

  const rating = data.appendChild(document.createElement('p'))
  rating.textContent = '⭐8.5'
})
