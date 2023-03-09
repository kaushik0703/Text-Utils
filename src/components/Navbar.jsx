import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// function Navbar(props) {
//   return (
//     .....
//   )
// }

// export default Navbar

//or we directly export


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-dark rounded mx-2" id="btn" onClick={props.toggleMode}  style={{height:'25px', width:'25px'}}></div>
          </div>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" id="btn" onClick={props.toggleMode} style={{height:'25px', width:'25px'}}></div>
          </div>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" id="btn" onClick={props.toggleMode} style={{height:'25px', width:'25px'}}></div>
          </div>
          {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode' : 'Enable Light Mode'}</label>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

//It ensures propTypes are as mentioned or not
Navbar.propTypes = {
    title : PropTypes.string,
    aboutText : PropTypes.string
}

Navbar.defaultProps = {
    title : 'set title here',
    aboutText : 'About textUtils'
}
