import { estadoJuego, jugadores } from '../../data/datosTicTacToe.js'
import './crearTablero.css'
import { seleccionarCuadrados } from './seleccionarCuadrados/seleccionarCuadrados.js'

export const crearTablero = () => {
  const app = document.querySelector('#app')
  app.innerHTML = ''
  const sectionTicTacToe = document.createElement('section')
  sectionTicTacToe.className = 'section-TicTacToe'
  const h2 = document.createElement('h2')
  h2.textContent = 'Tres en raya'

  const divContenedor = document.createElement('div')
  divContenedor.className = 'div-container'

  for (let i = 0; i < 9; i++) {
    const div = document.createElement('div')
    div.className = 'cuadrado'
    divContenedor.append(div)
  }

  const divSeleccionar = document.createElement('div')
  divSeleccionar.className = 'div-seleccionar'
  const h3 = document.createElement('h3')
  h3.textContent = 'Selecciona jugador inicial'
  const divButtons = document.createElement('div')
  divButtons.className = 'buttons-ticTacToe'

  for (const jugador of jugadores) {
    const boton = document.createElement('button')
    boton.textContent = jugador
    boton.className = 'boton'
    divButtons.append(boton)

    boton.addEventListener('click', () => {
      estadoJuego.estadoJuego = jugador
      estadoJuego.partidaActiva = true
      divSeleccionar.classList.toggle('apagado')
      seleccionarCuadrados()
    })
  }
  divSeleccionar.append(h3, divButtons)

  sectionTicTacToe.append(h2, divContenedor, divSeleccionar)
  app.append(sectionTicTacToe)
}
