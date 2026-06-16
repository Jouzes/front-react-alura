import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import UlitmosLancamentos from "./componentes/UlitmosLancamentos";
import styled from 'styled-components';

const AppContainer = styled.div`
    min-height: 100vh;
    background: #f4f7fb;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UlitmosLancamentos/>
    </AppContainer>
  );
}

export default App
