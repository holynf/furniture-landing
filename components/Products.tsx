"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ActionButton from "@/components/ActionButton";

interface StepType {
    id: number;
    title: string;
}

const steps: StepType[] = [
    { id: 0, title: "Chair" },
    { id: 1, title: "Beds" },
    { id: 2, title: "Sofa" },
    { id: 3, title: "Lamp" },
];

function Products() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className={"products"}>
            <h2 className={"heading-title"}>Best Selling Product</h2>
            <div className={"tabs"}>
                {steps.map((step, index) => (
                    <button
                        key={index}
                        className={clsx("tab-button", { "is-active": activeStep === step.id })}
                        onClick={() => setActiveStep(step.id)}
                    >
                        {step.title}
                    </button>
                ))}
            </div>
            <div className={"products__carousel"}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={42}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className={"mySwiper products__swiper"}
                >
                    {[1, 2, 3, 4, 5].map((item) => (
                        <SwiperSlide key={item} className={"product-card"}>
                            <div className={"product-card__media"}>
                                <div className={"product-card__media-inner"}>
                                    <img
                                        src={"/images/chair.png"}
                                        className={"product-card__image"}
                                        alt='product image'
                                    />
                                </div>
                            </div>
                            <div className={"product-card__body"}>
                                <div className={"product-card__info"}>
                                    <p className={"product-card__category"}>Chair</p>
                                    <p className={"product-card__title"}>Sakarias Armchair</p>
                                    <img
                                        src={"/icon/five-star.svg"}
                                        alt='star icon'
                                        className={"product-card__stars"}
                                    />
                                </div>
                                <div className={"product-card__footer"}>
                                    <span className={"product-card__price"}>123$</span>
                                    <img
                                        className={"product-card__add"}
                                        src={"/icon/add.svg"}
                                        alt='add icon'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <ActionButton className={"products__viewall"} text={"View All"} />
        </section>
    );
}

export default Products;
