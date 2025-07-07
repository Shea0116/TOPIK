import './styles/Main.scss'
import { Outlet } from "react-router-dom"


const Main = () => {
  return (
    <div id='Main'>
      <Outlet />
    </div>
  )
}

export default Main
