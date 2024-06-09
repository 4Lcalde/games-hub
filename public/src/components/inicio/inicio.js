import { headerCreator } from '../header/header'
import { logIn } from '../logIn/logIn'
import { pagePrincipal } from '../main/main'

export const lanzamientoInicio = () => {
  const usuario = localStorage.getItem('usuario')

  if (usuario) {
    headerCreator(usuario)
    pagePrincipal(usuario)
  } else {
    logIn()
  }
}
