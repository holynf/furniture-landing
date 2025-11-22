const Footer = () => {
    return (
        <footer>
            <div className={"footer-wrapper"}>
                <div className={"logo-section"}>
                    <div className={"logo"}>Panto</div>
                    <span>
                        The advantage of hiring a workspace with us is that givees you comfortable
                        service and all-around facilities.
                    </span>
                </div>
                <div className={"access"}>
                    <span className={"title"}>Services</span>
                    <span>Email Marketing</span>
                    <span>Campaigns</span>
                    <span>Branding</span>
                </div>
                <div className={"access"}>
                    <span className={"title"}>Furniture</span>
                    <span>Beds</span>
                    <span>Chair</span>
                    <span>All</span>
                </div>
                <div className={"access"}>
                    <span className={"title"}>Follow Us</span>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Instagram</span>
                </div>
            </div>
            <div className='copyright'>
                <span className={"text"}>Copyright &copy; 2021</span>
                <ul className={"links"}>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;
