import React from "react";
import '../styles/footer.scss'
import svgs from '../svgs'

type Props = {
    theme: string;
    sideBar: boolean;
}

const Footer: React.FC<Props> = ({theme, sideBar}) => {
    let blur = "no-blur";

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && sideBar) {
       blur = "blur";
    }

    return (
        <div className={theme}>
            <div className={blur}>
                <div className="footer-container">
                    <div className="links-container">
                        <a href="https://tateosborne.com">
                            t.p.o.    
                        </a>
                        <a href="https://linkedin.com/in/tate-osborne/" target="_blank">
                            <span 
                                dangerouslySetInnerHTML={{__html: svgs.linkedin}} />
                        </a>
                        <a href="https://github.com/tateosborne" target="_blank">
                            <span 
                                dangerouslySetInnerHTML={{__html: svgs.github}} />
                        </a>
                        <a href="https://stackoverflow.com/users/21316190/tate" target="_blank">
                            <span 
                                dangerouslySetInnerHTML={{__html: svgs.stackoverflow}} />
                        </a>
                        <a href="https://www.youtube.com/@tateosborne6849/featured" target="_blank">
                            <span
                                dangerouslySetInnerHTML={{__html: svgs.youtube}}/>
                        </a>
                    </div>
                </div> 
            </div> 
        </div>
    )
}

export default Footer;
