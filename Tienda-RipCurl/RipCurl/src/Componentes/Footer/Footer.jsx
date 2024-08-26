
const Footer = (props) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h5 style={{color:"red"}}>{props.greeting}</h5>
                    <p><b>Copyright © 2024 - RIPCURL ARGENTINA BY MALCOM VECK</b></p>
                </div>
            </div>
        </div>
    )
}

export default Footer