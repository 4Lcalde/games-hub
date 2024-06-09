import { datosPartidaCartas } from '../../../data/datosCartas'

export const resetearValores = () => {
  datosPartidaCartas.contador = 0
  datosPartidaCartas.carta1 = undefined
  datosPartidaCartas.carta2 = undefined
}
