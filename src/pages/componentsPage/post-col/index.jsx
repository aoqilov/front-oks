import React, { useEffect, useState } from "react";
// image
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
const index = () => {
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
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  console.log(windowSize);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    handleResize();
  }, []);
  return (
    <div className="container">
      <div className="postcol">
        <div className="postcol__titlebox">
          <div className="title">
            <span></span>
            <h3>new posts</h3>
          </div>
          {windowSize > 576 ? (
            <div className="navigations">
              <h4>show all</h4>
              <IoIosArrowForward className="navigations-icon" />
            </div>
          ) : (
            <div className="navigations">
              <div className="navigation prev" onClick={handleSlidePrev}>
                <IoIosArrowBack />
              </div>
              <div className="navigation next" onClick={handleSlideNext}>
                <IoIosArrowForward />
              </div>
            </div>
          )}
        </div>
        <div className="postcol__cards">
          {windowSize > 576 ? (
            <>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg1} alt="img" />
                </div>
                <div className="card__info">
                  <div className="card__toptitle">
                    <h5>Opening Day of Boating Season, Seattle WA</h5>
                    <p>
                      Of course the Puget Sound is very watery, and where there
                      is water, there are boats. Today is the Grand Opening of
                      Boating Season when traffic gets stalled in the University
                      District (UW) while the Montlake Bridge
                    </p>
                  </div>
                  <div className="card__userbox user">
                    <div className="user-image">
                      <img src={postuserImg1} alt="ss" />
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
              </div>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg1} alt="img" />
                </div>
                <div className="card__info">
                  <div className="card__toptitle">
                    <h5>Opening Day of Boating Season, Seattle WA</h5>
                    <p>
                      Of course the Puget Sound is very watery, and where there
                      is water, there are boats. Today is the Grand Opening of
                      Boating Season when traffic gets stalled in the University
                      District (UW) while the Montlake Bridge
                    </p>
                  </div>
                  <div className="card__userbox user">
                    <div className="user-image">
                      <img src={postuserImg1} alt="ss" />
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
              </div>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg1} alt="img" />
                </div>
                <div className="card__info">
                  <div className="card__toptitle">
                    <h5>Opening Day of Boating Season, Seattle WA</h5>
                    <p>
                      Of course the Puget Sound is very watery, and where there
                      is water, there are boats. Today is the Grand Opening of
                      Boating Season when traffic gets stalled in the University
                      District (UW) while the Montlake Bridge
                    </p>
                  </div>
                  <div className="card__userbox user">
                    <div className="user-image">
                      <img src={postuserImg1} alt="ss" />
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
              </div>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg1} alt="img" />
                </div>
                <div className="card__info">
                  <div className="card__toptitle">
                    <h5>Opening Day of Boating Season, Seattle WA</h5>
                    <p>
                      Of course the Puget Sound is very watery, and where there
                      is water, there are boats. Today is the Grand Opening of
                      Boating Season when traffic gets stalled in the University
                      District (UW) while the Montlake Bridge
                    </p>
                  </div>
                  <div className="card__userbox user">
                    <div className="user-image">
                      <img src={postuserImg1} alt="ss" />
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
              </div>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg1} alt="img" />
                </div>
                <div className="card__info">
                  <div className="card__toptitle">
                    <h5>Opening Day of Boating Season, Seattle WA</h5>
                    <p>
                      Of course the Puget Sound is very watery, and where there
                      is water, there are boats. Today is the Grand Opening of
                      Boating Season when traffic gets stalled in the University
                      District (UW) while the Montlake Bridge
                    </p>
                  </div>
                  <div className="card__userbox user">
                    <div className="user-image">
                      <img src={postuserImg1} alt="ss" />
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
              </div>
              <div className="card">
                <div className="card__imgbox">
                  <img src={postImg1} alt="img" />
                </div>
                <div className="card__info">
                  <div className="card__toptitle">
                    <h5>Opening Day of Boating Season, Seattle WA</h5>
                    <p>
                      Of course the Puget Sound is very watery, and where there
                      is water, there are boats. Today is the Grand Opening of
                      Boating Season when traffic gets stalled in the University
                      District (UW) while the Montlake Bridge
                    </p>
                  </div>
                  <div className="card__userbox user">
                    <div className="user-image">
                      <img src={postuserImg1} alt="ss" />
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
              </div>
            </>
          ) : (
            <Swiper
              pagination={Pagination}
              modules={[Navigation, Pagination, A11y, EffectCoverflow]}
              spaceBetween={20}
              onSwiper={(swiperInstance) => (swiper = swiperInstance)}
              className="swiper"
            >
              <SwiperSlide>
                <div className="card">
                  <div className="card__imgbox">
                    <img src={postImg1} alt="img" />
                  </div>
                  <div className="card__info">
                    <div className="card__toptitle">
                      <h5>Opening Day of Boating Season, Seattle WA</h5>
                      <p>
                        Of course the Puget Sound is very watery, and where
                        there is water, there are boats. Today is the Grand
                        Opening of Boating Season when traffic gets stalled in
                        the University District (UW) while the Montlake Bridge
                      </p>
                    </div>
                    <div className="card__userbox user">
                      <div className="user-image">
                        <img src={postuserImg1} alt="ss" />
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
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="card__imgbox">
                    <img src={postImg1} alt="img" />
                  </div>
                  <div className="card__info">
                    <div className="card__toptitle">
                      <h5>Opening Day of Boating Season, Seattle WA</h5>
                      <p>
                        Of course the Puget Sound is very watery, and where
                        there is water, there are boats. Today is the Grand
                        Opening of Boating Season when traffic gets stalled in
                        the University District (UW) while the Montlake Bridge
                      </p>
                    </div>
                    <div className="card__userbox user">
                      <div className="user-image">
                        <img src={postuserImg1} alt="ss" />
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
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="card__imgbox">
                    <img src={postImg1} alt="img" />
                  </div>
                  <div className="card__info">
                    <div className="card__toptitle">
                      <h5>Opening Day of Boating Season, Seattle WA</h5>
                      <p>
                        Of course the Puget Sound is very watery, and where
                        there is water, there are boats. Today is the Grand
                        Opening of Boating Season when traffic gets stalled in
                        the University District (UW) while the Montlake Bridge
                      </p>
                    </div>
                    <div className="card__userbox user">
                      <div className="user-image">
                        <img src={postuserImg1} alt="ss" />
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
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="card__imgbox">
                    <img src={postImg1} alt="img" />
                  </div>
                  <div className="card__info">
                    <div className="card__toptitle">
                      <h5>Opening Day of Boating Season, Seattle WA</h5>
                      <p>
                        Of course the Puget Sound is very watery, and where
                        there is water, there are boats. Today is the Grand
                        Opening of Boating Season when traffic gets stalled in
                        the University District (UW) while the Montlake Bridge
                      </p>
                    </div>
                    <div className="card__userbox user">
                      <div className="user-image">
                        <img src={postuserImg1} alt="ss" />
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
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card">
                  <div className="card__imgbox">
                    <img src={postImg1} alt="img" />
                  </div>
                  <div className="card__info">
                    <div className="card__toptitle">
                      <h5>Opening Day of Boating Season, Seattle WA</h5>
                      <p>
                        Of course the Puget Sound is very watery, and where
                        there is water, there are boats. Today is the Grand
                        Opening of Boating Season when traffic gets stalled in
                        the University District (UW) while the Montlake Bridge
                      </p>
                    </div>
                    <div className="card__userbox user">
                      <div className="user-image">
                        <img src={postuserImg1} alt="ss" />
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
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
