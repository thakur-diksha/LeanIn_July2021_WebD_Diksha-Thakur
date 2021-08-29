import "./contact.scss";
import {
  Mail,
  Instagram,
  LinkedIn,
  Facebook,
  GitHub,
} from "@material-ui/icons";

export default function Contact() {

    return (
        <div className="contact" id="contact">
            <div className="wrapper">
                <div className="left">
                    <h2 className="logo"> Connect with me</h2>
                    <div className="itemcontainer">
                        <Mail className="icon" />
                        <span>thakurdiksha47@gmail.com</span>

                </div>
                    
                </div>
                <div className="right">
                
                    <div className="itemcontainer" onClick={()=>window.open("https://www.linkedin.com/in/diksha-thakur-44621a218")}>
                        <LinkedIn className="icon" />
                          
                    </div>          

                     <div className="itemcontainer" onClick={()=>window.open("https://www.facebook.com/dikshahaha")}>
                        <Facebook className="icon" />
                          
                    </div>
                    <div className="itemcontainer" onClick={()=>window.open("https://github.com/thakur-diksha")}>
                        <GitHub className="icon" />
                        
                    </div>
                    <div className="itemcontainer" onClick={()=>window.open("https://instagram.com/myylastbraincell?utm_medium=copy_link")}>
                        <Instagram className="icon" />
                          
                </div>       
                    </div>
                </div>
            </div>
       
    )
}