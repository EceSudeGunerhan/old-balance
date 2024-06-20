import logo from '../imgs/ob-logo.png';

function Footer() {
    return (
        <div className="my-footer">
            <div className="footer-set d-flex justify-content-between align-items-center">
                <div><a href='mailto:iletisim@oldbalance.com'>Bize Ulaşın</a></div>
                <div>©2024 Old Balance</div>
                <div><img src={logo} className='logo-footer' alt="logo"/></div>
            </div>
        </div>
    );
}

export default Footer;