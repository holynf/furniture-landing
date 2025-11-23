import React from "react";
import ActionButton from "@/components/ActionButton";

const Experiences = () => {
    return (
        <section className={"experiences"}>
            <div className={"experiences__visual"}>
                <img src='/images/sofa.png' alt='sofa image' />
                <img
                    src='/images/sofa-top-bg.png'
                    alt=''
                    className={"experiences__bg experiences__bg--top"}
                />
                <img
                    src='/images/sofa-right-bg.png'
                    alt=''
                    className={"experiences__bg experiences__bg--right"}
                />
            </div>
            <div className={"experiences__content"}>
                <p className={"experiences__label"}>experiences</p>
                <p className={"experiences__title"}>
                    We Provide You The <br /> Best Experience
                </p>
                <p className={"experiences__desc"}>
                    You don’t have to worry about the result because all of these interiors are made
                    by people who are professionals in their fields with an elegant and lucurious
                    style and with premium quality materials
                </p>
                <ActionButton className={"experiences__more"} text={"More Info"} />
            </div>
        </section>
    );
};
export default Experiences;
