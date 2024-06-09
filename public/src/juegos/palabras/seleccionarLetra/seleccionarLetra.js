import { letrasUsadas, objetoContador } from '../../../data/dataAhorcado'
import { ganarAhorcado } from '../ganarAhorcado/ganarAhorcado'

export const seleccionarLetra = () => {
  const p = document.querySelector('.palabra-juego')
  const pFallo = document.querySelector('.error')
  const form = document.querySelector('.form-ahorcado')
  const input = document.querySelector('#inputText')
  const foto = document.querySelector('.foto-ahorcado')

  let nuevaPalabra

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (letrasUsadas.includes(input.value)) {
      console.log('repe')
      input.value = ''
      pFallo.classList.remove('oculto')
      pFallo.textContent = 'Ya has introducido esa letra. '
      return
    }
    letrasUsadas.push(input.value)

    let validado = true
    const letrasValidas = /[a-zA-Z]/g

    if (!letrasValidas.test(input.value)) {
      pFallo.classList.remove('oculto')
      pFallo.textContent = 'Introduce una letra válida.'
      validado = false
      input.value = ''
    }

    if (validado) {
      pFallo.classList.add('oculto')
      let nuevaPalabra = objetoContador.palabraOculta.split('')

      if (objetoContador.palabraInicial.includes(input.value.toUpperCase())) {
        for (let i = 0; i < objetoContador.palabraInicial.length; i++) {
          if (input.value.toUpperCase() === objetoContador.palabraInicial[i]) {
            nuevaPalabra[i] = input.value.toUpperCase()
            objetoContador.palabraOculta = nuevaPalabra.join('')
            p.innerHTML = objetoContador.palabraOculta
          }
        }
      } else {
        objetoContador.contador++
        foto.src = `./assets/ahorcado/ahorcado${objetoContador.contador}.png`
      }
      console.log(objetoContador.contador)
      input.value = ''
    }
    ganarAhorcado(objetoContador.palabraOculta)
    console.log(letrasUsadas)
  })
}
