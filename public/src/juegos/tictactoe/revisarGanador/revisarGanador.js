import { arrayJuego, jugadasGanadors } from '../../../data/datosTicTacToe'
import { ganar } from '../ganar/ganar'
import { mostrarModal } from '../mostrarModal.js/mostrarModal'

export const revisarGanador = () => {
  for (let i = 0; i < jugadasGanadors.length; i++) {
    const [a, b, c] = jugadasGanadors[i]
    if (
      arrayJuego[a] !== '' &&
      arrayJuego[a] === arrayJuego[b] &&
      arrayJuego[a] === arrayJuego[c]
    ) {
      return ganar(arrayJuego[a], a, b, c)
    }
  }

  if (!arrayJuego.includes('')) {
    mostrarModal('empate')
  }

  return null
}
