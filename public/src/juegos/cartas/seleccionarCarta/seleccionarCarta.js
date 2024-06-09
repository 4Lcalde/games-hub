import { datosPartidaCartas } from '../../../data/datosCartas'
import { comprobar } from '../comprobarCartas/comprobarCartas'

export const seleccionarCarta = (divCartaNodoHtml, datosDeCadaCarta) => {
  if (datosDeCadaCarta.activada || datosPartidaCartas.contador >= 2) {
    return
  }

  divCartaNodoHtml.style.backgroundImage = datosDeCadaCarta.foto
  datosPartidaCartas.contador++

  if (datosPartidaCartas.contador === 1) {
    datosPartidaCartas.carta1 = {
      nodoHtml: divCartaNodoHtml,
      datosCarta: datosDeCadaCarta
    }
  } else if (datosPartidaCartas.contador === 2) {
    datosPartidaCartas.carta2 = {
      nodoHtml: divCartaNodoHtml,
      datosCarta: datosDeCadaCarta
    }
    comprobar()
  }
}
