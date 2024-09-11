import logo from '../assets/investment-calculator-logo.png';

export default function Header(){
    return <header id='header'>
        <img src={logo} alt='Loho showing Money Bag'/>
        <h1>Invesement Calculator</h1>
    </header>
}