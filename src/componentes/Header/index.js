import Logo from '../../componentes/Logo'
import OpcoesHeader from '../../componentes/OpcoesHeader';
import OpcoesIcones from '../../componentes/OpcoesIcones';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <OpcoesIcones />
        </HeaderContainer>
    )
}

export default Header;