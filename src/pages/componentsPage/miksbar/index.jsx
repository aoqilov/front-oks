import React from "react";
import tagsImg1 from "assets/imgbox/png/miks-1.png";
import tagsImg2 from "assets/imgbox/png/miks-2.png";
import nextTags from "assets/imgbox/svg/nextTags.svg";
// for slider

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";

const index = () => {
  SwiperCore.use([Navigation, Pagination, A11y]);

  let swiper;

  const handleSlideNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handleSlidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <div className="container tags">
      <div className="tags__items">
        <Swiper
          freeMode={true}
          slidesPerView={6}
          spaceBetween={20}
          modules={[Navigation, Pagination, A11y]}
          mousewheel={true}
          keyboard={true}
          onSwiper={(swiperInstance) => (swiper = swiperInstance)}
        >
          <SwiperSlide>
            <div className="tags__item">
              <img src={tagsImg1} alt="tagsImg" />
              <p>#food</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tags__item">
              <img src={tagsImg1} alt="tagsImg" />
              <p>#food</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tags__item">
              <img src={tagsImg1} alt="tagsImg" />
              <p>#food</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tags__item">
              <img src={tagsImg1} alt="tagsImg" />
              <p>#food</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tags__item">
              <img src={tagsImg1} alt="tagsImg" />
              <p>#food</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tags__item">
              <img src={tagsImg1} alt="tagsImg" />
              <p>#food</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tags__item">
              <img src={tagsImg1} alt="tagsImg" />
              <p>#food</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tags__item">
              <img src={tagsImg1} alt="tagsImg" />
              <p>#food</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="tags__btn-next">
          <div className="next" onClick={() => handleSlideNext()}>
            <img src={nextTags} alt="next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
