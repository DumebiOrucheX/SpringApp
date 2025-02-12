import "../css/header.css";
import headervid from "../images/headervid.png"
import headerpic from "../images/header1.png"

const Header = () => {

  var vidStyles = {
    width: '464.45px',
    height: '338px',
    top: '152px',
    gap: '0px',
  };

  var picStyles = {
    width: '430.45px',
    marginTop: '-20px',
    gap: '0px',
  };

  return (
    <>
  <header className="header">
   <div>
   <h1 className="headingh">The Future <span style={{color: 'white'}}>kkkkkk </span>Of Contracting</h1>
   <p className="headingp">Bringing consumer-like experience into the world of robust corporate tools.</p>

   <img src={headerpic} style={picStyles} alt="Header Video"/>
   </div>


   <div>
    <img src={headervid} style={vidStyles} alt="Header Video"/>
   </div>
        
  </header>
  </>
  )
}
export default Header;