import { estadoJuego } from '../../../data/datosTicTacToe'
export const ganar = (ganador, a, b, c) => {
  estadoJuego.partidaActiva = false // Desactivar la partida
  estadoJuego.estadoJuego = 'pausa'

  mostrarModal('ha ganado ' + ganador)
}
