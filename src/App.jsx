
import './App.css'
import { Button } from './component/common/button'
import { Container } from './component/common/ontainer'
import { SectionTitle } from './component/common/section-title'
import { Cards } from './component/shared/cards'

function App() {

  return (
    <>
      <main className='font-onest'>
        <Container>
          <Button>Cypher AI</Button>
          <SectionTitle>Dashboard</SectionTitle>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </Container>
      </main>
    </>
  )
}

export default App

