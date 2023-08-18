import '../styles/footer.scss'
import svgs from '../svgs'

function Footer() {

    return (
        <div className="footer-container">
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
    )
}

export default Footer;
