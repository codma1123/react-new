import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import './header.css'

const Header = () => {
  return (
    <> 
      <div className="navbar-box"></div>
      
      <navbar className="navbar">        
        <Link to="/" className="text-link">
          <FontAwesomeIcon icon={faHome} size="2x"/>
        </Link>        
      </navbar>      
    </>
  )
}

export default Header