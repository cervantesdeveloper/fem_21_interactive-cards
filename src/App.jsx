import './App.css'
import { InfoProvider } from './context/InfoContext'
import CardDisplay from './components/CardDisplay'
import Footer from './components/Footer'
import Form from './components/Form'

function App() {
  

  return (
    <>
      <main>
        <InfoProvider>
          <CardDisplay />
          <Form />
        </InfoProvider>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
