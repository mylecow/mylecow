import styled from 'styled-components'
import './App.css'
import { Centered } from './components/layout'

const MyCentered = styled(Centered)`
  gap: 1rem;
  flex-direction: column;

  & * {
    background-color: gray;
  }
`;

function App() {

  return (
    <>
      <h1>My Lecow</h1>
      <MyCentered style={{backgroundColor: 'lightblue'}}>
        <h2>Prueba</h2>
        <h2>Rabbit</h2>
      </MyCentered>
    </>
  )
}

export default App
