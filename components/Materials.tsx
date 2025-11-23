import React from "react";
import ActionButton from "@/components/ActionButton";

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
                <ActionButton className={"materials__more"} text={"More Info"} />
            </div>
            <div className={"materials__images"}>
                <div className={"materials__column--tall"}>
                    <img src='/images/material-chair.png' alt='' />
                    <img src='/images/material-sofa.png' alt='' className={"materials__sofa"} />
                </div>
                <div className={"materials__column--short"}>
                    <img src='/images/sofa-right-bg.png' alt='' className={"back-bg"} />
                    <img src='/images/material-chairs.png' alt='' className={"chairs-image"} />
                </div>
            </div>
        </section>
    );
};
export default Materials;
