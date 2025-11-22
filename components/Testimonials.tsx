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
                                <img src='/images/user.png' alt='user image' />
                                <p className={"content__username"}>Bang Upin</p>
                                <p className={"content__user_sub"}>Pedagang Asongan</p>
                                <p className={"content__text"}>
                                    “Terimakasih banyak, kini ruanganku menjadi lebih mewah dan
                                    terlihat mahal“
                                </p>
                                <img
                                    src='/icon/five-star.svg'
                                    alt='star icon'
                                    className={"content__star"}
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
