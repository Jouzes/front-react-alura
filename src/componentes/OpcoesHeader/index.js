import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 14px;
    cursor: pointer;
    color: #31506b;
    border-radius: 6px;
    transition: background-color 0.2s ease, color 0.2s ease;

    p {
        margin: 0;
    }

    &:hover {
        background-color: #eef5fb;
        color: #002f52;
    }
`

const Opcoes = styled.ul`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0;
    margin: 0;

    @media (max-width: 720px) {
        order: 3;
        width: 100%;
        overflow-x: auto;
        padding-bottom: 4px;
    }
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Opcao key={texto}><p>{texto}</p></Opcao>
            ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader
