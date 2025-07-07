import './Layout.scss'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useSelector} from 'react-redux';

const Layout = () => {
    // const [isDark, setIsDark] = useState(false);
    const { isDark } = useSelector(state => state.isDark)

    return (
        <>
            <div id='Layout' data-theme={isDark ? 'dark' : 'light'}>
                <Header />
                <Main></Main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
