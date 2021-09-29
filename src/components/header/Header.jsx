import './../../css/style.css'
import logo from './../../assets/Grapheme.logo.svg'

function Header() {
    return(
        <div className='header'>
            <h1 className='header__heading'>Тестовое задание</h1>
            <img className='header__logo' alt='logo' src={logo} />
        </div>
    );
}

export default Header;