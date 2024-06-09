import { juegos } from '../../data/data'
import { logOutAction } from '../logOut/logOut'
import { pagePrincipal } from '../main/main'
import './header.css'

export const headerCreator = (name) => {
  localStorage.setItem('usuario', name)

  const header = document.createElement('header')
  const app = document.querySelector('#app')
  header.id = 'header'

  const logo = document.createElement('img')
  logo.id = 'logo'
  logo.src = '/assets/poker.png'
  logo.alt = 'Logo'

  logo.addEventListener('click', () => {
    app.innerHTML = ''
    pagePrincipal(name)
  })

  const menuToggle = document.createElement('p')
  menuToggle.classList.add('toggle')
  menuToggle.textContent = 'Elegir juego  ▽'

  const navGames = document.createElement('nav')
  navGames.className = 'nav-games'
  const ulGames = document.createElement('ul')
  ulGames.className = 'ul-games'

  const juegos = [
    { name: 'Juego 1', function: () => console.log('Juego 1') },
    { name: 'Juego 2', function: () => console.log('Juego 2') }
    // Add more games as needed
  ]

  for (const juego of juegos) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = juego.name

    a.addEventListener('click', (event) => {
      event.preventDefault()
      juego.function()
      navGames.classList.toggle('visible')
    })

    li.appendChild(a)
    ulGames.appendChild(li)
  }

  const divUser = document.createElement('div')
  divUser.className = 'div-user'
  const imgUser = document.createElement('img')
  imgUser.className = 'img-user'
  imgUser.src = '/assets/user.png'
  imgUser.alt = 'User'
  const nameUser = document.createElement('p')
  nameUser.textContent = name

  const buttonLogOut = document.createElement('button')
  buttonLogOut.textContent = 'LogOut'
  buttonLogOut.classList.add('button-logout')
  buttonLogOut.id = 'logOut'

  divUser.addEventListener('click', () => {
    buttonLogOut.classList.toggle('abierto')
  })

  divUser.append(nameUser, imgUser, buttonLogOut)

  navGames.appendChild(ulGames)
  header.append(logo, navGames, menuToggle, divUser)
  document.body.insertBefore(header, app)

  menuToggle.addEventListener('click', () => {
    navGames.classList.toggle('visible')
  })

  logOutAction()
}
