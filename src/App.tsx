import { LoadingProvider } from './context/LodingContext'
import { GlobalStyle } from './layout/GlobalStyle'
import Router from './router/Router'

function App() {
  return (
    <LoadingProvider>
      <Router />
      <GlobalStyle />
    </LoadingProvider>
  )
}

export default App
