import '../styles/footer.scss'
import svgs from '../svgs'

function Contact() {

    return (
        <div className="footer-container">
            <div className="contact-container">
                <div className="header-container">
                    <h2>REACH OUT 📬</h2>
                    <h3>check out my contacts below!</h3>
                </div>
                <p>tateposborne@icloud.com</p>
                <p>résumé</p>
            </div>
            <img src="../emojis/memoji-call.png" alt="memoji phone call" />
        </div>
    )
}

export default Contact;
