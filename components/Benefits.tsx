import React from "react";

interface DataType {
    title: string;
    content: string;
}

const datas: DataType[] = [
    {
        title: "Luxury facilities",
        content:
            "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
    },
    {
        title: "Affordable Price",
        content:
            "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
    },
    {
        title: "Many Choices",
        content:
            "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
];

function Benefits() {
    return (
        <article className={"benefits"}>
            <section className={"text-[42px] font-bold shrink-0 "}>
                Why <br /> Choosing Us
            </section>
            <section className={"grid grid-cols-3 gap-7"}>
                {datas.map((data, index) => (
                    <div key={index} className={"flex flex-col gap-5"}>
                        <h3 className={"font-bold text-[24px]"}>{data.title}</h3>
                        <span className={"text-[#1E1E1E] text-base"}>{data.content}</span>
                        <div className={"flex items-center gap-3 text-[#E58411]"}>
                            <span>More Info</span>
                            <span>
                                <img src='/icon/arrow.svg' alt='arrow svg' />
                            </span>
                        </div>
                    </div>
                ))}
            </section>
        </article>
    );
}

export default Benefits;
