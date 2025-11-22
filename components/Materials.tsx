import React from "react";

const Materials = () => {
    return (
        <section className={"materials"}>
            <div className={"materials__left"}>
                <p className={"materials__label"}>materials</p>
                <p className={"materials__title"}>
                    Very Serious <br /> Materials For Making <br /> Furniture
                </p>
                <p className={"materials__desc"}>
                    You don’t have to worry about the result because all of these interiors are made
                    by people who are professionals in their fields with an elegant and lucurious
                    style and with premium quality materials
                </p>
                <div className={"materials__more"}>
                    <span>More Info</span>
                    <span>
                        <img src='/icon/arrow.svg' alt='arrow svg' />
                    </span>
                </div>
            </div>
            <div className={"materials__images"}>
                <div className={"materials__column--tall"}>
                    <img src='/images/material-chair.png' alt='' />
                    <img src='/images/material-sofa.png' alt='' className={"materials__sofa"} />
                </div>
                <div className={"materials__column--short"}>
                    <img src='/images/material-chairs.png' alt='' />
                </div>
            </div>
        </section>
    );
};
export default Materials;
