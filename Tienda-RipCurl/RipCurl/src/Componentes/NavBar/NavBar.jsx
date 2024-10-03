import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <header>
            <div className="container-fluid my-2">
                <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="row">
                        <div className="col">
                            <Link to="/">
                                <img src="../../../public/rip-curl-logo.png" alt="RipCurlLogo" width="220" height="30" className="ms-5"/>
                            </Link>
                        </div>
                        <div className="col d-flex align-items-center">
                            <ul className="nav justify-content-center margin">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active text-dark fs-5" aria-current="page"><b>TODOS</b></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="categoria/Camisas" className="nav-link text-dark fs-5"><b>CAMISAS</b></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="categoria/Remeras" className="nav-link active text-dark fs-5"><b>REMERAS</b></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="categoria/Shorts" className="nav-link text-dark fs-5"><b>SHORTS</b></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="categoria/Neoprene" className="nav-link text-dark fs-5"><b>NEOPRENE</b></NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <CartWidget/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar