import { datosCartas } from '../../../data/datosCartas'
import { modalCartas } from '../modalCartas/modalCartas'

export const ganarCartas = () => {
  const todasActivadas = datosCartas.every((carta) => carta.activada === true)
  if (todasActivadas) {
    modalCartas()
  }
}
