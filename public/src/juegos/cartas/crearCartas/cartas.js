import { datosCartas, datosPartidaCartas } from '../../../data/datosCartas'
import { seleccionarCarta } from '../seleccionarCarta/seleccionarCarta'
import './cartas.css'

const puntuacionHTML = document.createElement('h3')
puntuacionHTML.className = 'puntuacion'
puntuacionHTML.textContent = `Puntuación: ${datosPartidaCartas.puntuacion}`

export const cartasGenerator = () => {
  const app = document.querySelector('#app')
  const section = document.createElement('section')
  section.className = 'section-cartas'
  app.innerHTML = ''

  datosCartas.sort(() => Math.random() - Math.random())

  datosCartas.forEach((datosDeCadaCarta) => {
    const divCartaNodoHtml = document.createElement('div')
    divCartaNodoHtml.className = 'carta'
    divCartaNodoHtml.addEventListener('click', () => {
      seleccionarCarta(divCartaNodoHtml, datosDeCadaCarta)
    })

    section.appendChild(divCartaNodoHtml)
  })

  app.append(section, puntuacionHTML)
}
