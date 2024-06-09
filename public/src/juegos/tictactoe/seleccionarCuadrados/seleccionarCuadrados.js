import { O, X, arrayJuego, estadoJuego } from '../../../data/datosTicTacToe'
import { revisarGanador } from '../revisarGanador/revisarGanador'

export const seleccionarCuadrados = () => {
  const cuadrados = document.querySelectorAll('.cuadrado')

  cuadrados.forEach((cuadrado, i) => {
    cuadrado.addEventListener('click', () => {
      if (!estadoJuego.partidaActiva) return
      if (cuadrado.innerText !== '') return

      cuadrado.innerText = estadoJuego.estadoJuego === 'X' ? 'X' : 'O'
      arrayJuego[i] = estadoJuego.estadoJuego
      estadoJuego.estadoJuego = estadoJuego.estadoJuego === 'X' ? 'O' : 'X'
      revisarGanador()
    })
  })
}
