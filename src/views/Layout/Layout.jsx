import './Layout.scss'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'
import { useState } from 'react';

const Layout = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return (
        <>
            <div id='Layout' data-theme={isDark ? 'dark' : 'light'}>
                <Header isDark={isDark} toggleTheme={toggleTheme} />
                <Main><Outlet /></Main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
