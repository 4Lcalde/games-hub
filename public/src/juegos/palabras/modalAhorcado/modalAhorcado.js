export const modalAhorcado = (texto) => {
  const puntuacion = document.querySelector('.puntuacion')
  const dialog = document.createElement('dialog')

  const textoModal = document.createElement('p')
  textoModal.textContent = texto

  const botonModal = document.createElement('button')
  botonModal.className = 'boton'
  botonModal.id = 'boton-modal-cartas'
  botonModal.textContent = 'Reiniciar'

  dialog.appendChild(textoModal)
  dialog.appendChild(botonModal)
  document.body.appendChild(dialog)
  dialog.showModal()

  botonModal.addEventListener('click', () => {
    dialog.close()
    dialog.remove()
  })
}
