const Footer = () => {
    return (
        <section className={"bg-[#F7F7F7] h-[462px] px-[190px]"}>
            <div className={"access grid grid-cols-4 py-[118px] justify-items-center"}>
                <div className={"flex flex-col gap-8"}>
                    <div className={"text-[#1E1E1E] text-[26px] font-bold"}>Panto</div>
                    <span>
                        The advantage of hiring a workspace with us is that givees you comfortable
                        service and all-around facilities.
                    </span>
                </div>
                <div className={"flex flex-col gap-5"}>
                    <span className={"text-[#F6973F]"}>Services</span>
                    <span>Email Marketing</span>
                    <span>Campaigns</span>
                    <span>Branding</span>
                </div>
                <div className={"flex flex-col gap-5"}>
                    <span className={"text-[#F6973F]"}>Furniture</span>
                    <span>Beds</span>
                    <span>Chair</span>
                    <span>All</span>
                </div>
                <div className={"flex flex-col gap-5"}>
                    <span className={"text-[#F6973F]"}>Follow Us</span>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Instagram</span>
                </div>
            </div>
            <div className='rights flex justify-between items-center'>
                <span className={"opacity-50"}>Copyright &copy; 2021</span>
                <ul className={"flex items-center gap-10"}>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </section>
    );
};
export default Footer;
