import { arrayJuego, estadoJuego } from '../../../data/datosTicTacToe'
import { seleccionarCuadrados } from '../seleccionarCuadrados/seleccionarCuadrados'

export const mostrarModal = (ganador) => {
  const botonesSeleccionar = document.querySelector('.div-seleccionar')
  let dialog = document.querySelector('dialog')
  if (!dialog) {
    dialog = document.createElement('dialog')

    document.body.appendChild(dialog)
  } else {
    dialog.innerHTML = ''
  }

  // Crear el botón de reiniciar
  const botonReiniciar = document.createElement('button')
  botonReiniciar.textContent = 'Reiniciar'
  botonReiniciar.className = 'boton'

  botonReiniciar.addEventListener('click', () => {
    arrayJuego.forEach((_, i) => {
      arrayJuego[i] = ''
    })

    const cuadrados = document.querySelectorAll('.cuadrado')
    cuadrados.forEach((cuadrado) => {
      cuadrado.textContent = ''
    })

    botonesSeleccionar.classList.toggle('apagado')
    dialog.close()
    dialog.remove()

    estadoJuego.estadoJuego = 'X'
    estadoJuego.partidaActiva = false
  })

  const p = document.createElement('p')
  p.innerText = ganador
  dialog.append(p, botonReiniciar)

  dialog.showModal()
}
