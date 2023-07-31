import '../styles/contact.scss'
import svgs from '../svgs'

function Contact() {

    return (
        <div className="contact-container" id="contact">
            <div className="header-container">
                <h2>REACH OUT! 📬</h2>
                <h3>below are my contacts and resume!</h3>
            </div> 
            <div className="sub-container">
                <div className="content-container">
                    <div className="contacts">
                        <div className="each-contact">
                            <p
                                dangerouslySetInnerHTML={{__html: svgs.email}}>
                            </p>
                            <p>tateposborne@icloud.com</p>
                        </div>
                        <div className="each-contact">
                            <p
                                dangerouslySetInnerHTML={{__html: svgs.phone}}>
                            </p>
                            <p>(603) 818-0710</p>
                        </div>
                        <div className="each-contact">
                            <p
                                dangerouslySetInnerHTML={{__html: svgs.cv}}>
                            </p>
                            <p>resume (pdf)</p>
                        </div>
                    </div>
                    <img src="../selfportrait.png" alt="self-portrait drawing" />
                </div>
            </div>
            <div className="footer">
                <p>tateposborne</p>
                <p>linkedin</p>
                <p>github</p>
                <p>stackoverflow</p>

            </div>
        </div>
    )
}

export default Contact;
