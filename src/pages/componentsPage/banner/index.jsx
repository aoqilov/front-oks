import React from "react";
// image
import bannerImg1 from "assets/imgbox/jpg/banner-1.jpg";
import bannerImg2 from "assets/imgbox/jpg/banner-2.jpg";
import bannerImg3 from "assets/imgbox/jpg/banner-3.jpg";
// svg
import arrowNext from "assets/imgbox/svg/arrowNext.svg";
import arrowBack from "assets/imgbox/svg/arrowBack.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectCards,
  EffectCube,
  EffectCoverflow,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
const index = () => {
  const pagination = {
    clickable: true,
    el: ".swiper-info",
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  // /navigation

  SwiperCore.use([Navigation, Pagination, A11y, EffectCoverflow]);

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
    <div className="container">
      <div className="banner">
        <div className="banner__cardbox first">
          <img src={bannerImg1} alt="banner_img" />
          <div className="titlebox">
            <h3>dsamsa ssnjad sasdk</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam consectetur modi quas dolor officiis accusantium nam
              fugit rem natus blanditiis.
            </p>
          </div>
        </div>
        <div className="banner__cardbox second">
          <img src={bannerImg2} alt="banner_img" />
          <div className="titlebox">
            <h3>dsamsa ssnjad sasdk</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam consectetur modi quas dolor officiis accusantium nam
              fugit rem natus blanditiis.
            </p>
          </div>
        </div>
        <div className="banner__cardbox three">
          <div className="three__arrowbox">
            <div className="btn-box" onClick={handleSlidePrev}>
              <IoIosArrowBack className="icon-arrow" />
            </div>
            <div className="btn-box" onClick={handleSlideNext}>
              <IoIosArrowForward className="icon-arrow" />
            </div>
          </div>
          <Swiper
            pagination={pagination}
            modules={[Navigation, Pagination, A11y, EffectCoverflow]}
            slidesPerView={"auto"}
            spaceBetween={10}
            mousewheel={true}
            keyboard={true}
            onSwiper={(swiperInstance) => (swiper = swiperInstance)}
          >
            <SwiperSlide>
              <div className="three-box">
                <img src={bannerImg3} alt="banner_img" />
                <div className="titlebox">
                  <h3>dsamsa ssnjad sasdk</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consectetur modi quas dolor officiis accusantium
                    nam fugit rem natus blanditiis.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="three-box">
                <img src={bannerImg2} alt="banner_img" />
                <div className="titlebox">
                  <h3>dsamsa ssnjad sasdk</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consectetur modi quas dolor officiis accusantium
                    nam fugit rem natus blanditiis.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="three-box">
                <img src={bannerImg3} alt="banner_img" />
                <div className="titlebox">
                  <h3>dsamsa ssnjad sasdk</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consectetur modi quas dolor officiis accusantium
                    nam fugit rem natus blanditiis.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="three-box">
                <img src={bannerImg2} alt="banner_img" />
                <div className="titlebox">
                  <h3>dsamsa ssnjad sasdk</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consectetur modi quas dolor officiis accusantium
                    nam fugit rem natus blanditiis.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="three-box">
                <img src={bannerImg1} alt="banner_img" />
                <div className="titlebox">
                  <h3>dsamsa ssnjad sasdk</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam consectetur modi quas dolor officiis accusantium
                    nam fugit rem natus blanditiis.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <div className="swiper-info"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default index;
