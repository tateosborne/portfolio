import '../styles/contact.scss'
import svgs from '../svgs'

function Contact() {

    return (
        <div className="contact-container" id="contact">
            <div className="sub-container">
                <div className="header-container">
                    <h2>REACH OUT 📬</h2>
                    <h3>check out my contacts below!</h3>
                </div>
                <div className="contacts">
                    <div className="each-contact">
                        <span 
                            dangerouslySetInnerHTML={{__html: svgs.email}} />
                        <a href="mailto:tateposborne@icloud.com" target="_blank" rel="noreferrer noopener">
                            tateposborne@icloud.com
                        </a>
                    </div>
                    <div className="each-contact">
                        <span
                            dangerouslySetInnerHTML={{__html: svgs.download}} />
                        <a href="src/assets/pdfs/resume.pdf" target="_blank">résumé (.pdf)</a>
                    </div>
                </div>
                <img src="../emojis/memoji-call.png" alt="memoji phone call" />
            </div>
        </div>
    )
}

export default Contact;
