const cards = document.querySelectorAll('.carousel__card.card')

cards.forEach((card, index) => {
  card.style.backgroundImage = `
    linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.7)),
    url(https://picsum.photos/175/225?random=${index + 1})
  `
})
