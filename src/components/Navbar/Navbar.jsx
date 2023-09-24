import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <h1 className="navbar-brand fs-3" ><FontAwesomeIcon icon={faBook} style={{ color: "#ffffff", }} /> Book-Chapters </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-2 me-lg-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active fs-5" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/auth/signup' className="nav-link fs-5" >Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
