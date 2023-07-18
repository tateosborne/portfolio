import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Nav />
        <Home />
        <About />
        <Projects />
    </React.StrictMode>,
)
