import { RouterProvider } from 'react-router-dom'
import { LoadingProvider } from './context/LodingContext'
import { GlobalStyle } from './layout/GlobalStyle'
import router from './router/Router'

function App() {
  return (
    <LoadingProvider>
      <RouterProvider router={router} />
      <GlobalStyle />
    </LoadingProvider>
  )
}

export default App
