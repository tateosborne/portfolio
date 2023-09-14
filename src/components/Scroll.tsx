import { useState, useEffect } from 'react';
import "../styles/scroll.scss";
import svgs from "../svgs";

type Props = {
    theme: string;
    sideBar: boolean;
}

const Scroll: React.FC<Props> = ({theme, sideBar}) => {
    const [isVisible, setIsVisible] = useState(false);
    var blur = "no-blur";

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

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && sideBar) {
        blur = "blur";
     }

    return (
        <div className={theme}>
            <div className={blur}>
                <a className={`container ${isVisible ? "visible" : ""}`} href="#"
                    dangerouslySetInnerHTML={{__html: svgs.uparrow}}>
                </a>
            </div>
        </div>
    )
}

export default Scroll;
