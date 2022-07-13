// import shoppingIcon from '././assets/shopping-icon.svg'

import shoppingIcon from '../../assets/shopping-icon.svg';

import Styles from './Navbar.module.css'

const Navbar = () => {
    return (
    <nav className={Styles.nav}>
        <img className={Styles.navIcon} src={shoppingIcon} alt="shopping-icon "/>
        <h1 className={Styles.navTitle}>Shopping List {new Date().toLocaleTimeString()}</h1>
        
    </nav>
    )
    
}
export default Navbar