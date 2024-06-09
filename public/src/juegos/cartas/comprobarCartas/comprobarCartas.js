import { datosPartidaCartas } from '../../../data/datosCartas'
import { ganarCartas } from '../ganarCartas/ganarCartas'
import { resetearCarta } from '../resetearCartas/resetearCartas'
import { resetearValores } from '../resetearValores/resetearValores'

export const comprobar = () => {
  const puntuacionHTML = document.querySelector('.puntuacion')

  if (
    datosPartidaCartas.carta1.datosCarta.id ===
    datosPartidaCartas.carta2.datosCarta.id
  ) {
    datosPartidaCartas.puntuacion++
    datosPartidaCartas.carta1.datosCarta.activada = true
    datosPartidaCartas.carta2.datosCarta.activada = true
    resetearValores()
    ganarCartas()
  } else {
    datosPartidaCartas.puntuacion--
    setTimeout(() => {
      resetearCarta(datosPartidaCartas.carta1)
      resetearCarta(datosPartidaCartas.carta2)
      resetearValores()
    }, 500)
  }

  puntuacionHTML.textContent = `Puntuación: ${datosPartidaCartas.puntuacion}`
}
