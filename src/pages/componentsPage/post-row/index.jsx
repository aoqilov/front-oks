import React from "react";
// assests
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsBookmarkPlus } from "react-icons/bs";
import postImg1 from "assets/imgbox/png/post-1.png";
import postImg2 from "assets/imgbox/png/post-2.png";
import postuserImg1 from "assets/imgbox/png/p-user1.png";
import postuserImg2 from "assets/imgbox/png/p-user2.png";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";

const index = ({ titleName, array, countCard }) => {
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
      <div className="post">
        <div className="post__titlebox">
          <div className="title">
            <span></span>
            <h3>{titleName}</h3>
          </div>
          <div className="navigations">
            <div className="navigation prev" onClick={handleSlidePrev}>
              <IoIosArrowBack />
            </div>
            <div className="navigation next" onClick={handleSlideNext}>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="post__cards">
          <Swiper
            pagination={Pagination}
            modules={[Navigation, Pagination, A11y, EffectCoverflow]}
            breakpoints={{
              390: {
                slidesPerView: 1,
                spaceBetween: 0,
              },

              576: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1201: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            spaceBetween={20}
            mousewheel={true}
            keyboard={true}
            onSwiper={(swiperInstance) => (swiper = swiperInstance)}
            className="swiper"
          >
            <SwiperSlide>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg1} alt="post img" />
                </div>
                <div className="card__info">
                  <h5>Opening Day of Boating Season, Seattle WA</h5>
                  <p>
                    Of course the Puget Sound is very watery, and where there is
                    water, there are boats. Today is the Grand Opening of
                    Boating Season when traffic gets stalled in the University
                    District (UW) while the Montlake Bridge
                  </p>
                </div>
                <div className="card__user">
                  <div className="user-image">
                    <img src={postuserImg1} alt="user img" />
                  </div>
                  <div className="user-name">
                    <h5>john doe</h5>
                    <p>20.04.2000</p>
                  </div>
                  <div className="user-save">
                    <BsBookmarkPlus className="user-save-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg2} alt="post img" />
                </div>
                <div className="card__info">
                  <h5>2Opening Day of Boating Season, Seattle WA</h5>
                  <p>
                    Of course the Puget Sound is very watery, and where there is
                    water, there are boats. Today is the Grand Opening of
                    Boating Season when traffic gets stalled in the University
                    District (UW) while the Montlake Bridge
                  </p>
                </div>
                <div className="card__user">
                  <div className="user-image">
                    <img src={postuserImg2} alt="user img" />
                  </div>
                  <div className="user-name">
                    <h5>john doe</h5>
                    <p>20.04.2000</p>
                  </div>
                  <div className="user-save">
                    <BsBookmarkPlus className="user-save-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg2} alt="post img" />
                </div>
                <div className="card__info">
                  <h5>3Opening Day of Boating Season, Seattle WA</h5>
                  <p>
                    Of course the Puget Sound is very watery, and where there is
                    water, there are boats. Today is the Grand Opening of
                    Boating Season when traffic gets stalled in the University
                    District (UW) while the Montlake Bridge
                  </p>
                </div>
                <div className="card__user">
                  <div className="user-image">
                    <img src={postuserImg2} alt="user img" />
                  </div>
                  <div className="user-name">
                    <h5>john doe</h5>
                    <p>20.04.2000</p>
                  </div>
                  <div className="user-save">
                    <BsBookmarkPlus className="user-save-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg1} alt="post img" />
                </div>
                <div className="card__info">
                  <h5>4Opening Day of Boating Season, Seattle WA</h5>
                  <p>
                    Of course the Puget Sound is very watery, and where there is
                    water, there are boats. Today is the Grand Opening of
                    Boating Season when traffic gets stalled in the University
                    District (UW) while the Montlake Bridge
                  </p>
                </div>
                <div className="card__user">
                  <div className="user-image">
                    <img src={postuserImg1} alt="user img" />
                  </div>
                  <div className="user-name">
                    <h5>john doe</h5>
                    <p>20.04.2000</p>
                  </div>
                  <div className="user-save">
                    <BsBookmarkPlus className="user-save-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg1} alt="post img" />
                </div>
                <div className="card__info">
                  <h5>5Opening Day of Boating Season, Seattle WA</h5>
                  <p>
                    Of course the Puget Sound is very watery, and where there is
                    water, there are boats. Today is the Grand Opening of
                    Boating Season when traffic gets stalled in the University
                    District (UW) while the Montlake Bridge
                  </p>
                </div>
                <div className="card__user">
                  <div className="user-image">
                    <img src={postuserImg1} alt="user img" />
                  </div>
                  <div className="user-name">
                    <h5>john doe</h5>
                    <p>20.04.2000</p>
                  </div>
                  <div className="user-save">
                    <BsBookmarkPlus className="user-save-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg1} alt="post img" />
                </div>
                <div className="card__info">
                  <h5>6Opening Day of Boating Season, Seattle WA</h5>
                  <p>
                    Of course the Puget Sound is very watery, and where there is
                    water, there are boats. Today is the Grand Opening of
                    Boating Season when traffic gets stalled in the University
                    District (UW) while the Montlake Bridge
                  </p>
                </div>
                <div className="card__user">
                  <div className="user-image">
                    <img src={postuserImg1} alt="user img" />
                  </div>
                  <div className="user-name">
                    <h5>john doe</h5>
                    <p>20.04.2000</p>
                  </div>
                  <div className="user-save">
                    <BsBookmarkPlus className="user-save-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default index;
