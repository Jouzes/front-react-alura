import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 86px;
    padding: 0 72px;
    box-sizing: border-box;
    box-shadow: 0 8px 30px rgba(17, 38, 60, 0.08);
    position: sticky;
    top: 0;
    z-index: 10;

    @media (max-width: 860px) {
        padding: 16px 24px;
        flex-wrap: wrap;
        gap: 16px;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header
