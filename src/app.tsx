import { useState } from 'react'
import Nav from './components/Nav.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Artwork from './components/Artwork.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import Scroll from './components/Scroll.tsx'

function App() {
    const [theme, setTheme] = useState("light-theme");

    const toggleTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme");
        } else {
            setTheme("light-theme");
        }
    }

    return (
        <>
            <Nav theme={theme} toggleTheme={toggleTheme}/>
            <Home theme={theme} />
            <About theme={theme} />
            <Projects theme={theme} />
            <Artwork theme={theme} />
            <Contact theme={theme} />
            <Scroll theme={theme} />
            <Footer theme={theme} />
        </>
    )
}

export default App;