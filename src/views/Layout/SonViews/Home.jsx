import './styles/Home.scss'
import { useSelector } from 'react-redux';
import logo1 from '@/assets/MyLogo.png';
import logo2 from '@/assets/MyLogo-Compress.png';
const Home = () => {
    const {isDark} = useSelector(state => state.isDark);
    return (
        <div id="Home">
            <h1>
                저편의너를불러 &nbsp;&nbsp;&nbsp;
                <span>TOPIK</span>
            </h1>
                <a href="https://github.com/Shea0116" target='blank'><img id='MyLogo' src={isDark ? logo2 :logo1} alt="网站logo" /></a>
            <div className='titlePart'>
                <h2>我的TOPIK备考中心</h2>
                <p>안녕하세요!</p>
                <p>This is Shea.</p>
                <p>这里包含了我备考的所有相关...</p>
            </div>
        </div>
    )
}

export default Home