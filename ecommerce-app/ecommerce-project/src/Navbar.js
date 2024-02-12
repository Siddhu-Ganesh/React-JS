import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar() {

    return (

        <div style={{marginBottom:'30px'}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                    <Link className="navbar-brand p-3" style={{ marginLeft: '50px' }} to={'/product'} >Home</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        

                        <form className="form-inline my-4 my-lg-0" style={{ marginLeft: '150px' }}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search for Products" aria-label="Search" />

                        </form>
                        <li className="nav-item active">
                            <Link className="nav-link" style={{ marginLeft: '150px' }} to={'/cart'}>Cart </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ marginLeft: '100px' }}>Orders </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ marginLeft: '100px' }}>Register</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ marginLeft: '100px' }} >Login</a>
                        </li>
                        <li>
                            <Link className="nav-link" style={{ marginLeft: '50px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                        </svg>
                        </Link>
                        </li>
                        
                    </ul>
                    {/* <form className="form-inline my-4 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                    </form> */}
                </div>
            </nav>

        </div>
    )
}

export default Navbar;