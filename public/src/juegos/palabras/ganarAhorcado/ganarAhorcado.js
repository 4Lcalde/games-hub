import { objetoContador } from '../../../data/dataAhorcado'
import { modalAhorcado } from '../modalAhorcado/modalAhorcado'
import { reiniciarAhorcado } from '../reiniciarAhorcado/reiniciarAhorcado'

export const ganarAhorcado = (palabra) => {
  if (objetoContador.contador === 7) {
    setTimeout(() => {
      objetoContador.puntuacion--
      modalAhorcado(`La palabra correcta es ${objetoContador.palabraInicial}`)
      reiniciarAhorcado()
    }, 100)
  } else if (palabra === objetoContador.palabraInicial) {
    setTimeout(() => {
      objetoContador.puntuacion++
      modalAhorcado('Has ganado')
      reiniciarAhorcado()
    }, 100)
  }
}
