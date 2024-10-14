
import './App.css'
import { Button } from './component/common/button'
import { Container } from './component/common/ontainer'
import { SectionTitle } from './component/common/section-title'

function App() {

  return (
    <>
      <main className='font-onest'>
        <Container>
          <Button>Cypher AI</Button>
          <SectionTitle>Dashboard</SectionTitle>
        </Container>
      </main>
    </>
  )
}

export default App

