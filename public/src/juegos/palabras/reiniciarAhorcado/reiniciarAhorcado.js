import {
  letrasUsadas,
  listadoPalabras,
  objetoContador
} from '../../../data/dataAhorcado'
import { estadoJuego } from '../../../data/datosTicTacToe'

export const reiniciarAhorcado = () => {
  const p = document.querySelector('.palabra-juego')
  const puntuacion = document.querySelector('.puntuacion')
  const foto = document.querySelector('.foto-ahorcado')

  objetoContador.contador = 1

  objetoContador.palabraInicial =
    listadoPalabras[
      Math.floor(Math.random() * listadoPalabras.length)
    ].toUpperCase()

  objetoContador.palabraOculta = objetoContador.palabraInicial.replace(
    /./g,
    '-'
  )

  letrasUsadas.length = 0

  p.innerHTML = objetoContador.palabraOculta

  foto.src = `./assets/ahorcado/ahorcado${objetoContador.contador}.png`
  puntuacion.textContent = `Tu puntuación es: ${objetoContador.puntuacion}`
}
