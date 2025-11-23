import React from "react";

function Landing() {
    return (
        <article className={"landing "}>
            <img
                src='/images/landing-point.png'
                alt=''
                className={"absolute bottom-[190px] right-[34px]"}
            />
            <img
                src='/images/landing-point.png'
                alt=''
                className={"absolute bottom-[230px] right-[710px]"}
            />
            <img
                src='/images/landing-point.png'
                alt=''
                className={"absolute bottom-[270px] left-[130px]"}
            />
            <img
                src='/images/landing-sofa-color.png'
                alt=''
                className={"absolute bottom-[350px] left-[320px]"}
            />
            <section className='navbar'>
                <div className={"logo"}>Panto</div>
                <ul className={"list"}>
                    <li className={"iconable-list-item"}>
                        <span>Furniture</span>
                        <span>
                            <img src='/icon/chevron.svg' alt='chevron icon' />
                        </span>
                    </li>
                    <li className={"iconable-list-item"}>Shop</li>
                    <li className={"iconable-list-item"}>About Us</li>
                    <li className={"iconable-list-item"}>Contact</li>
                </ul>
                <div className={"cart-icon"}>
                    <img src='/icon/bag.svg' alt='bag icon' />
                    <span className={"cart-badge"}>0</span>
                </div>
            </section>

            <section className={"landing-text-content"}>
                <h3 className={"banner-heading-text"}>
                    Make your interior more <br /> minimalistic & modern
                </h3>
                <span className={"banner-content-text"}>
                    Turn your room with panto into a lot more minimalist <br /> and modern with ease
                    and speed
                </span>
                <div className={"search-box"}>
                    <span className={"input-text"}>Search furniture</span>
                    <span className={"icon"}>
                        <img src='/icon/search.svg' alt='search icon' />
                    </span>
                </div>
            </section>
        </article>
    );
}

export default Landing;
