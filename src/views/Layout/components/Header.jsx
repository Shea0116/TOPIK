import './styles/Header.scss'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { changeDark } from '../../../store/modules/isDark'

const Header = () => {
  const { logo } = useSelector(state => state.logo)
  const isDark = useSelector(state => state.isDark.isDark) 
  const dispatch = useDispatch()
  const toggleTheme = () => {
    dispatch(changeDark())
  };

  return (
    <div id="Header">
      <img src={logo} alt="logo" />

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
        <a className='GithubUrl' href="https://github.com/Shea0116/TOPIK" target='blank'></a>
        <button onClick={toggleTheme}>
          {isDark ? '☀' : '🌙'}
        </button>
      </div>
    </div>
  )
}

export default Header
