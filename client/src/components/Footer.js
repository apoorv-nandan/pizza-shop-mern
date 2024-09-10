function Footer() {
    return (
        <footer className="footer" id="footer" style={{backgroundColor:'gray'}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <center>
                            <p className="text-muted credit" style={{margin:'10px'}}>
                                Copyright Pizza Shop @2024
                            </p>
                        </center>
                    </div>
                    <div className="col-sm-4" style={{ "textAlign": 'right' }}></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
