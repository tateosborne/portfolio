import { useState, useEffect } from 'react';
import "../styles/scroll.scss";
import svgs from "../svgs";

function Scroll() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > 250);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    }, []);

    return (
        <a className={`container ${isVisible ? "visible" : ""}`} href="#"
                dangerouslySetInnerHTML={{__html: svgs.uparrow}}>
        </a>
    )
}

export default Scroll;
