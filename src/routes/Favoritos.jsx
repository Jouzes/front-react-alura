import Pesquisa from '../componentes/Pesquisa';
import styled from 'styled-components';

const FavoritosContainer = styled.div`
    min-height: 100vh;
    background: #f4f7fb;
`

function Favoritos() {
  return (
    <FavoritosContainer>
      <Pesquisa />
    </FavoritosContainer>
  );
}

export default Favoritos
