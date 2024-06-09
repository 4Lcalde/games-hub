import { objetoContador } from '../../../data/dataAhorcado'
import { seleccionarLetra } from '../seleccionarLetra/seleccionarLetra'
import './crearPantallaAhorcado.css'

const app = document.querySelector('#app')

export const crearPantallaAhorcado = () => {
  app.innerHTML = ''
  const section = document.createElement('section')
  section.className = 'ahorcado'

  const h2 = document.createElement('h2')
  h2.className = 'titulo-ahorcado'
  h2.textContent = 'El ahorcado'

  const divContainer = document.createElement('div')
  divContainer.className = 'ahorcado-container'

  const divInfoJuego = document.createElement('div')
  divInfoJuego.className = 'info-juego'

  const h3 = document.createElement('h3')
  h3.textContent = 'Encuentra la palaba:'

  const p = document.createElement('p')
  p.className = 'palabra-juego'
  p.textContent = objetoContador.palabraOculta

  const pFallo = document.createElement('p')
  pFallo.classList.add('oculto', 'error')

  console.log(objetoContador.palabraInicial)

  const form = document.createElement('form')
  form.className = 'form-ahorcado'
  const inputText = document.createElement('input')
  inputText.type = 'text'
  inputText.maxLength = 1
  inputText.placeholder = 'Introduce una letra'
  inputText.id = 'inputText'

  const botonInput = document.createElement('input')
  botonInput.type = 'submit'
  botonInput.value = 'Verificar letra'
  botonInput.id = 'inputBoton'

  const divFotoJuego = document.createElement('div')
  divFotoJuego.className = 'div-foto-juego'

  const img = document.createElement('img')
  img.className = 'foto-ahorcado'
  img.src = `assets/ahorcado/ahorcado5.png`

  const puntuacion = document.createElement('h3')
  puntuacion.className = 'puntuacion'
  puntuacion.textContent = `Tu puntuación es: ${objetoContador.puntuacion}`

  section.append(h2, divContainer, puntuacion)
  divContainer.append(divInfoJuego, divFotoJuego)
  divInfoJuego.append(h3, p, form, pFallo)
  form.append(inputText, botonInput)
  divFotoJuego.append(img)
  app.append(section)
  seleccionarLetra()
}
