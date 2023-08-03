import '../styles/contact.scss'
import svgs from '../svgs'

function Contact() {

    return (
        <div className="contact-container">
            <div className="sub-container">
                <div className="header-container">
                    <h2>REACH OUT 📬</h2>
                    <h3>check out my contacts below!</h3>
                </div>
                <div className="contacts">
                    <div className="each-contact">
                        <span 
                            dangerouslySetInnerHTML={{__html: svgs.email}} />
                        <p>tateposborne@icloud.com</p>
                    </div>
                    <div className="each-contact">
                        <span
                            dangerouslySetInnerHTML={{__html: svgs.download}} />
                        <p>résumé (.pdf)</p>
                    </div>
                </div>
                <img src="../emojis/memoji-call.png" alt="memoji phone call" />
            </div>
        </div>
    )
}

export default Contact;
