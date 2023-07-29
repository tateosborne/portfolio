import '../styles/contact.scss'
import svgs from '../svgs'

function Contact() {

    return (
        <div className="contact-container" id="contact">
            <div className="content-container">
                <h2>REACH OUT! 📬</h2>
                <h3>don't hesitate to contact me or checkout my socials</h3>
                <div className="email-container">
                    <p
                        dangerouslySetInnerHTML={{__html: svgs.email}}>
                    </p>
                    <p>tateposborne@icloud.com</p>

                </div>
            </div>
        </div>
    )
}

export default Contact;
