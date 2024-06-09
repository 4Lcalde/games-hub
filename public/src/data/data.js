import { cartasGenerator } from '../juegos/cartas/crearCartas/cartas'
import { crearPantallaAhorcado } from '../juegos/palabras/crearPantallaAhorcado/crearPantallaAhorcado'

import { crearTablero } from '../juegos/tictactoe/crearTablero'

export const juegos = [
  {
    name: 'ahorcado',
    img: '/assets/juegos/palabras.jpeg',
    function: crearPantallaAhorcado
  },
  {
    name: 'parejas',
    img: '/assets/juegos/parejas.jpeg',
    function: cartasGenerator
  },
  {
    name: 'TicTacToe',
    img: '/assets/juegos/tictactoe.jpeg',
    function: crearTablero
  }
]
