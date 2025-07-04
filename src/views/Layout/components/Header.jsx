import './styles/Header.scss'
import { useSelector } from "react-redux";

const Header = () => {
  const { logo } = useSelector(state => state.logo)
    
  return (
    <div id="Header">
      <img src={logo} alt="logo"/>
    </div>
  )
}

export default Header
