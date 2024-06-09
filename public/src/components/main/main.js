import { juegos } from '../../data/data'
import './main.css'

export const pagePrincipal = (name) => {
  const app = document.querySelector('#app')
  const divApp = document.createElement('div')
  divApp.className = 'div-app'
  const title = document.createElement('h1')
  title.textContent = `Un placer verte aquí, ${name}`
  const subtitle = document.createElement('h2')
  subtitle.textContent = '¿A qué quieres jugar?'

  const divImages = document.createElement('div')
  divImages.className = 'div-images'
  const ulImages = document.createElement('ul')
  ulImages.className = 'ul-images'

  for (const juego of juegos) {
    const carta = document.createElement('li')
    carta.className = 'li-images'

    const img = document.createElement('img')
    img.className = 'img-juego'
    img.src = juego.img
    img.alt = juego.name

    const cartel = document.createElement('div')
    cartel.className = 'cartel'

    const titleGame = document.createElement('h3')
    titleGame.className = 'title-game'
    titleGame.textContent = `Juega a ${juego.name}`

    cartel.appendChild(titleGame)
    carta.appendChild(img)
    carta.appendChild(cartel)
    ulImages.appendChild(carta)

    carta.addEventListener('click', () => {
      juego.function()
    })
  }

  divImages.appendChild(ulImages)
  divApp.append(title, subtitle)
  app.append(divApp, divImages)
}
