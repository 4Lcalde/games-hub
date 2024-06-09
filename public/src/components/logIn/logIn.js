import { headerCreator } from '../header/header'
import { pagePrincipal } from '../main/main'
import './logIn.css'

export const logIn = () => {
  const body = document.querySelector('body')
  const sectionLogIn = document.createElement('section')
  sectionLogIn.className = 'logIn'

  const divForm = document.createElement('div')
  divForm.id = 'div-form'
  const titleDiv = document.createElement('h2')
  titleDiv.className = 'title'
  titleDiv.textContent = 'Games hub te espera'
  const form = document.createElement('form')
  form.id = 'logIn-form'
  const input = document.createElement('input')
  const button = document.createElement('input')
  button.className = 'boton'
  button.textContent = 'Inicia sesión'
  button.type = 'submit'
  input.type = 'text'
  input.placeholder = 'Introduce tu nombre'
  input.className = 'boton'

  form.append(input, button)

  divForm.append(titleDiv, form)
  sectionLogIn.appendChild(divForm)
  body.appendChild(sectionLogIn)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value.trim() !== '') {
      const name = input.value

      sectionLogIn.classList.add('remove')

      setTimeout(() => {
        sectionLogIn.remove()
        headerCreator(name)
        pagePrincipal(name)
      }, 500)
    } else {
      const p = document.createElement('p')
      p.textContent = 'Inserte un nombre de usuario válido'
      divForm.append(p)
    }
  })
}
