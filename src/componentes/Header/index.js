import './estilo.css'
import Logo from '../../componentes/Logo'
import OpcoesHeader from '../../componentes/OpcoesHeader';
import OpcoesIcones from '../../componentes/OpcoesIcones';
function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OpcoesHeader />
            <OpcoesIcones />
        </header>
    )
}

export default Header;