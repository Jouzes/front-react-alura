import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 28px;
    color: #17324d;
    letter-spacing: 0;

    p {
        margin: 0;
    }
`

const LogoImage = styled.img`
    margin-right: 12px;
    width: 48px;
    height: 48px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='Logo do CineScope' 
            />
            <p><strong>Cine</strong>Scope</p>
       </LogoContainer>
    )
}

export default Logo
