import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from "../componentes/UltimosLancamentos";
import styled from 'styled-components';

const HomeContainer = styled.div`
    min-height: 100vh;
    background: #f4f7fb;
`

function Home() {
  return (
    <HomeContainer>
      <Pesquisa />
      <UltimosLancamentos/>
    </HomeContainer>
  );
}

export default Home
