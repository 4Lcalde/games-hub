import { datosCartas, datosPartidaCartas } from '../../../data/datosCartas'

export const modalCartas = () => {
  const puntuacion = document.querySelector('.puntuacion')
  const dialog = document.createElement('dialog')
  dialog.className = 'modal'
  const textoModal = document.createElement('p')
  textoModal.textContent =
    'Has ganado. ¡Juega de nuevo para mejorar tu puntuación!'

  const botonModal = document.createElement('button')
  botonModal.className = 'boton'
  botonModal.id = 'boton-modal-cartas'
  botonModal.textContent = 'Reiniciar'

  botonModal.addEventListener('click', () => {
    document
      .querySelectorAll('.carta')
      .forEach(
        (carta) =>
          (carta.style.backgroundImage = "url('./assets/cartas/carta.jpeg')")
      )

    dialog.close()
    dialog.remove()
    datosPartidaCartas.puntuacion = 0
    puntuacion.textContent = `Puntuación: ${datosPartidaCartas.puntuacion}`
    datosCartas.forEach((carta) => (carta.activada = false))
  })

  dialog.appendChild(textoModal)
  dialog.appendChild(botonModal)
  document.body.appendChild(dialog)
  dialog.showModal()
}
