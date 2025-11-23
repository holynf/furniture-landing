import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SliderDataType {
    username: string;
    user_sub: string;
    content: string;
    user_img: string;
}

const slider_data: SliderDataType[] = [
    {
        username: "Bang Upin",
        user_sub: "Pedagang Asongan",
        content: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
        user_img: "/images/user1.png",
    },
    {
        username: "Ibuk Sukijan",
        user_sub: "Ibu Rumah Tangga",
        content: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
        user_img: "/images/user2.png",
    },
    {
        username: "Mpok Ina",
        user_sub: "Karyawan Swasta",
        content: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
        user_img: "/images/user3.png",
    },
    {
        username: "Mpok Ina",
        user_sub: "Karyawan Swasta",
        content: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
        user_img: "/images/user1.png",
    },
    {
        username: "Mpok Ina",
        user_sub: "Karyawan Swasta",
        content: "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
        user_img: "/images/user2.png",
    },
];

const Testimonials = () => {
    return (
        <section className={"testimonials-wrapper"}>
            <div className={"heading"}>
                <p className={"title"}>testimonials</p>
                <p className={"subtitle"}>Our Client Reviews</p>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={40}
                navigation={true}
                modules={[Pagination, Navigation]}
                className='mySwiper'
            >
                {slider_data.map((item, index) => (
                    <SwiperSlide key={index} className={"testimonials-slider"}>
                        <div className={"content"}>
                            <img src={item.user_img} alt='user image' />
                            <p className={"content__username"}>{item.username}</p>
                            <p className={"content__user_sub"}>{item.user_sub}</p>
                            <p className={"content__text"}>{item.content}</p>
                            <img
                                src='/icon/five-star.svg'
                                alt='star icon'
                                className={"content__star"}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
export default Testimonials;
