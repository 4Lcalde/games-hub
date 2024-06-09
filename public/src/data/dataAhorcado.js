export const listadoPalabras = [
  'JavaScript',
  'React',
  'HTML',
  'Vite',
  'Developer',
  'Const',
  'Github',
  'LocalStorage',
  'Figma',
  'Responsive',
  'Fetch',
  'FrontEnd',
  'BackEnd'
]

export const palabraSeleccionada =
  listadoPalabras[
    Math.floor(Math.random() * listadoPalabras.length)
  ].toUpperCase()

export const objetoContador = {
  palabraInicial: palabraSeleccionada,
  palabraOculta: palabraSeleccionada.replace(/./g, '-'),
  contador: 1,
  puntuacion: 0
}

export const letrasUsadas = []
