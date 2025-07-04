import './styles/Header.scss'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = ({ isDark, toggleTheme }) => {
  const { logo } = useSelector(state => state.logo)

  return (
    <div id="Header">
      <img src={ logo } alt="logo" />

      <nav>
        <NavLink to="/" ><i className='iconfont icon-home'></i>首页</NavLink>
        <NavLink to="/words"><i className='iconfont icon-zhexiantu_o'></i>单词</NavLink>
        <NavLink to="/grammer"><i className='iconfont icon-shuzhuangtu'></i>语法</NavLink>
        <NavLink to="/listen"><i className='iconfont icon-erji'></i>听力</NavLink>
        <NavLink to="/speak"><i className='iconfont icon-shiwu-maikefeng'></i>口语</NavLink>
        <NavLink to="/read"><i className='iconfont icon-1'></i>阅读</NavLink>
        <NavLink to="/write"><i className='iconfont icon-xiezuo'></i>写作</NavLink>
      </nav>

      <div className='btns'>
        <button onClick={toggleTheme}>
          {isDark ? '☀' : '🌙'}
        </button>
      </div>
    </div>
  )
}

export default Header
