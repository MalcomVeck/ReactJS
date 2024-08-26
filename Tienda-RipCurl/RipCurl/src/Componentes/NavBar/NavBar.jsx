import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {

    return (
        <div className="container my-4" >
            <div className="row">
                <div className="col">
                    <a href="index.html">
                        <img src="../../../public/rip-curl-logo.png" alt="RipCurlLogo" width="220" height="30"/>
                    </a>
                </div>
                <div className="col d-flex align-items-center">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active text-dark" aria-current="page" href="index.html"><b>SNOW</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="index.html"><b>HOMBRE</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="index.html"><b>MUJER</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="index.html"><b>SURF</b></a>
                        </li>
                    </ul>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default NavBar