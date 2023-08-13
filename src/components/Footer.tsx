import '../styles/footer.scss'
import svgs from '../svgs'

function Footer() {

    return (
        <div className="footer-container">
            <p>t.p.o.</p>
            <span 
                dangerouslySetInnerHTML={{__html: svgs.linkedin}} />
            <span 
                dangerouslySetInnerHTML={{__html: svgs.github}} />
            <span 
                dangerouslySetInnerHTML={{__html: svgs.stackoverflow}} />
            <span
                dangerouslySetInnerHTML={{__html: svgs.youtube}}/>
        </div>
    )
}

export default Footer;
