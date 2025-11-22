import React from "react";

const Experiences = () => {
    return (
        <section className={"py-[270px] flex gap-40 pe-40"}>
            <div className={"relative shrink-0"}>
                <img src='/images/sofa.png' alt='sofa image' />
                <img
                    src='/images/sofa-top-bg.png'
                    alt=''
                    className={"absolute -top-16 left-0 -z-10"}
                />
                <img
                    src='/images/sofa-right-bg.png'
                    alt=''
                    className={"absolute top-20 -right-16 -z-10"}
                />
            </div>
            <div className={"flex flex-col gap-5"}>
                <p className={"uppercase text-[#E58411]"}>experiences</p>
                <p className={"text-[#1E1E1E] font-bold text-[42px]"}>
                    We Provide You The <br /> Best Experience
                </p>
                <p className={"text-[#1E1E1E] text-[18px] leading-[185%]"}>
                    You don’t have to worry about the result because all of these interiors are made
                    by people who are professionals in their fields with an elegant and lucurious
                    style and with premium quality materials
                </p>
                <div className={"flex items-center gap-3 text-[#E58411]"}>
                    <span>More Info</span>
                    <span>
                        <img src='/icon/arrow.svg' alt='arrow svg' />
                    </span>
                </div>
            </div>
        </section>
    );
};
export default Experiences;
