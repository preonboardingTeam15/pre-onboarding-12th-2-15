import IssueProvider from './context/IssueContext'
import { LoadingProvider } from './context/LodingContext'
import { GlobalStyle } from './layout/GlobalStyle'
import Router from './router/Router'

function App() {
  return (
    <LoadingProvider>
      <IssueProvider>
        <Router />
        <GlobalStyle />
      </IssueProvider>
    </LoadingProvider>
  )
}

export default App
