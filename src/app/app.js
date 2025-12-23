import { renderHomePage } from '../pages/home/home.page'

export function App() {
  const root = document.createElement('div')
  root.id = 'app'
  document.body.append(root)

  renderHomePage(root)
}
