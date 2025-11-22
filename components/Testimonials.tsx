import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
    return (
        <section className={"testimonials-wrapper"}>
            <div className={"heading"}>
                <p className={"title"}>testimonials</p>
                <p className={"subtitle"}>Our Client Reviews</p>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className='mySwiper'
                >
                    {[1, 2, 3, 4, 5].map((item) => (
                        <SwiperSlide key={item} className={"testimonials-slider"}>
                            <div className={"content"}>
                                <img
                                    src='/images/user.png'
                                    alt='user image'
                                    className={"size-[65px] rounded-full  bg-white"}
                                />
                                <p className={"text-[#1E1E1E] font-bold text-[18px]"}>Bang Upin</p>
                                <p className={"text-[#1E1E1E] font-normal text-[12px]"}>
                                    Pedagang Asongan
                                </p>
                                <p className={"text-center px-[42px] py-4 text-[14px]"}>
                                    “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
                                    terlihat mahal“
                                </p>
                                <img
                                    src='/icon/five-star.svg'
                                    alt='star icon'
                                    className={"w-[103px]"}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
export default Testimonials;
