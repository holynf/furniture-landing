import React from "react";
import clsx from "clsx";

function ActionButton({ className, text }: { className: string; text: string }) {
    return (
        <button
            className={clsx(
                className,
                "transition delay-150 duration-300 ease-in-out hover:-translate-y-1",
            )}
        >
            <span>{text}</span>
            <span>
                <img src={"/icon/arrow.svg"} alt={"arrow svg"} />
            </span>
        </button>
    );
}

export default ActionButton;
