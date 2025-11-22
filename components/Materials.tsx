import React from "react";

const Materials = () => {
    return (
        <section className={"pb-[270px] ps-20 flex gap-24 items-center"}>
            <div className={"flex flex-col gap-5"}>
                <p className={"uppercase text-[#E58411]"}>materials</p>
                <p className={"text-[#1E1E1E] font-bold text-[42px]"}>
                    Very Serious <br /> Materials For Making <br /> Furniture
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
            <div className={"shrink-0 flex gap-10 items-end"}>
                <div className={"flex flex-col gap-4 h-[590px]"}>
                    <img src='/images/material-chair.png' alt='' />
                    <img src='/images/material-sofa.png' alt='' className={"-mt-14"} />
                </div>
                <div className={"h-[445px]"}>
                    <img src='/images/material-chairs.png' alt='' />
                </div>
            </div>
        </section>
    );
};
export default Materials;
