"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
                        className={clsx("tab-button", { "bg-white": activeStep === step.id })}
                        onClick={() => setActiveStep(step.id)}
                    >
                        {step.title}
                    </button>
                ))}
            </div>
            <div className={"px-32"}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={42}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className='mySwiper !pt-32'
                >
                    {[1, 2, 3, 4, 5].map((item) => (
                        <SwiperSlide
                            key={item}
                            className={
                                "!h-[492px] !w-[268px] bg-white rounded-[20px] flex flex-col -z-10"
                            }
                        >
                            <div className='!h-[239px] shrink-0 bg-[#FAFAFA] px-6 pb-8'>
                                <div className={"h-full relative"}>
                                    <img
                                        src='/images/chair.png'
                                        className={"absolute -bottom-5 right-0 !z-[9999]"}
                                        alt='product image'
                                    />
                                </div>
                            </div>
                            <div className={"grow p-[21px] flex flex-col h-full"}>
                                <div className={"flex flex-col gap-2 shrink-0 pb-16"}>
                                    <p className={"text-[#8D8D8D]"}>Chair</p>
                                    <p className={"text-[#0D1B39] font-bold text-xl"}>
                                        Sakarias Armchair
                                    </p>
                                    <img
                                        src='/icon/five-star.svg'
                                        alt='star icon'
                                        className={"w-[103px]"}
                                    />
                                </div>
                                <div className={"flex justify-between items-end "}>
                                    <span className={"text-[#0D1B39] font-bold text-xl"}>123$</span>
                                    <img
                                        className={"size-[48px] cursor-pointer"}
                                        src='/icon/add.svg'
                                        alt='add icon'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={"pt-[60px] flex items-center gap-3 text-[#E58411] w-fit mx-auto"}>
                <span>View All</span>
                <span>
                    <img src='/icon/arrow.svg' alt='arrow svg' />
                </span>
            </div>
        </section>
    );
}

export default Products;
