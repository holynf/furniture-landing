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
            <section className={"benefits__heading"}>
                Why <br /> Choosing Us
            </section>
            <section className={"benefits__grid"}>
                {datas.map((data, index) => (
                    <div key={index} className={"benefits__item"}>
                        <h3 className={"benefits__item-title"}>{data.title}</h3>
                        <span className={"benefits__item-content"}>{data.content}</span>
                        <div className={"benefits__item-more"}>
                            <span>More Info</span>
                            <span>
                                <img src={'/icon/arrow.svg'} alt={'arrow svg'} />
                            </span>
                        </div>
                    </div>
                ))}
            </section>
        </article>
    );
}

export default Benefits;
