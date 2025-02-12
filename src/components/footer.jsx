import "../css/footer.css"
import footerlogo from "../images/footer2.png"
import footerpic from "../images/footerpic.png"
import footerline from "../images/footerline.png"

const Footer = () => {
    
    return (
        <>
        <footer className="footer">
       <div>
       <img src={footerlogo} className="footer-logo-style" />
       </div>

       <div>
          <img src={footerpic} className="footer-pic-style" />
       </div>
         <br />
         
         <img src={footerline} style={{marginLeft: '240px', width: '60%'}} />

          <br /> <br />  <br /> <br />
         <div className="footer-columns">
              <div className="footer-column footer-column1">
                <a href="#" style={{fontWeight: 'bold'}}>Product</a>
                <a href="#">Features</a>
                <a href="#">Technology</a>
                <a href="#">Security</a>
                <a href="#">Pricing</a>
              </div>

              <div className="footer-column footer-column2">
                <a href="#" style={{fontWeight: 'bold'}}>Solution</a>
                <a href="#">Procurement</a>
                <a href="#">Sales</a>
                <a href="#">Legal</a>
                <a href="#">Enterprises</a>
              </div>

              <div className="footer-column footer-column3">
              <a href="#" style={{fontWeight: 'bold'}}>Company</a>
                <a href="#">Careers</a>
                <a href="#">Case Study</a>
              </div>

              <div className="footer-column footer-column4">
                <a href="#" style={{fontWeight: 'bold'}}>Links</a>
                <a href="#">Facebook</a>
                <a href="#">Linkedin</a>
              </div>
         </div>
        </footer>
        </>
    )
}

export default Footer