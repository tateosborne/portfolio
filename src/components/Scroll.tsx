import { useState, useEffect } from 'react';
import "../styles/scroll.scss";
import svgs from "../svgs";

type Props = {
    theme: string;
}

const Scroll: React.FC<Props> = ({theme}) => {
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
        <div className={theme}>
            <a className={`container ${isVisible ? "visible" : ""}`} href="#"
                dangerouslySetInnerHTML={{__html: svgs.uparrow}}>
            </a>
        </div>
    )
}

export default Scroll;
