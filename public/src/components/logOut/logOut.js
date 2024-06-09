import './logOut.css'
export const buttonLogOut = () => {
  const divUser = document.querySelector('.div-user')
  const button = document.querySelector('#logOut')
  divUser.addEventListener('click', () => button.classList.toggle('abierto'))
}

export const logOutAction = () => {
  const button = document.querySelector('#logOut')
  button.addEventListener('click', () => {
    localStorage.removeItem('usuario')
    window.location.reload()
  })
}
