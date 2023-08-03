import '../styles/footer.scss'
import svgs from '../svgs'

function Footer() {

    return (
        <div className="footer-container">
            {/* <span 
                dangerouslySetInnerHTML={{__html: svgs.logo}} /> */}
            <span 
                dangerouslySetInnerHTML={{__html: svgs.linkedin}} />
            <span 
                dangerouslySetInnerHTML={{__html: svgs.github}} />
            <span 
                dangerouslySetInnerHTML={{__html: svgs.stackoverflow}} />
        </div>
    )
}

export default Footer;
