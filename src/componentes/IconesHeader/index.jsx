import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: #f3f7fb;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;

    img {
        width: 22px;
        height: 22px;
    }

    &:hover {
        background-color: #e2edf6;
        transform: translateY(-1px);
    }
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    margin: 0;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone, index) => (
              <Icone key={index}><img src={icone} alt="" /></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader
