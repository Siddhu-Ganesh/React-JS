import {Link,useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar() {
    const navigation=useNavigate()
    const loggedin= true;
    const login=()=>{
        if(loggedin){
            navigation('/amazon')
    
        }else{
            window.alert("login not able to do")
        }
    }
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse "  id="navbarTogglerDemo01">
                    <Link className="navbar-brand p-3" to={'/User'} >Home</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/laptops"} style={{marginLeft:'150px'}}>User </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/TrainList"} style={{marginLeft:'150px'}}>TrainList </Link>
                        </li>
                        
                        <form className="form-inline my-4 my-lg-0"style={{marginLeft:'150px'}}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                    </form>
                        <li className="nav-item">
                        <Link className="nav-link" to={"/Todo"} style={{marginLeft:'100px'}}>Todo </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/register'} style={{marginLeft:'100px'}}>Register</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{marginLeft:'100px'}} onClick={login}>Login</a>
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