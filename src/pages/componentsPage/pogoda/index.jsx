import React from "react";
// icons
import { FaSun } from "react-icons/fa";
import pogoda1 from "assets/imgbox/png/pogoda-1.png";
import pogoda2 from "assets/imgbox/png/pogoda-2.png";

const index = () => {
  return (
    <div className="pogodabox">
      <div className="container pogoda">
        <div className="pogoda__wrapper">
          <div className="main">
            <div className="main__top-header">
              <div className="left">
                <div className="weather-logo">
                  <FaSun className="icon-logo" />
                </div>
                <div className="weather-gradus">
                  <h4>29</h4> <span>&#8451;</span>
                </div>
                <div className="weather-info">
                  <p>Precipitation: 2%</p>
                  <p>Precipitation: 2%</p>
                  <p>Precipitation: 2%</p>
                </div>
              </div>
              <div className="right">
                <h4>new york city</h4>
                <p>wednesday 00:40</p>
              </div>
            </div>
            <div className="chart">chart</div>
            <div className="days">days</div>
          </div>
          <div className="others">
            <div
              className="nation"
              style={{
                backgroundImage: "url(" + { pogoda2 } + ")",
              }}
            >
              <div className="nation__topbox">
                <div className="left">
                  <div className="weather-info">
                    <p>Precipitation: 2%</p>
                    <p>Precipitation: 2%</p>
                    <p>Precipitation: 2%</p>
                  </div>
                </div>
                <div className="right">
                  <h4>new york city</h4>
                  <p>wednesday 00:40</p>
                </div>
              </div>
              <div className="nation__gradus">
                <FaSun className="icon-gradus" />
                <h4>29</h4>
                <span>&#8451;</span>
              </div>
            </div>
            <div
              className="nation"
              style={{
                backgroundImage: "url(" + { pogoda1 } + ")",
              }}
            >
              <div className="nation__topbox">
                <div className="left">
                  <div className="weather-info">
                    <p>Precipitation: 2%</p>
                    <p>Precipitation: 2%</p>
                    <p>Precipitation: 2%</p>
                  </div>
                </div>
                <div className="right">
                  <h4>new york city</h4>
                  <p>wednesday 00:40</p>
                </div>
              </div>
              <div className="nation__gradus">
                <FaSun className="icon-gradus" />
                <h4>29</h4>
                <span>&#8451;</span>
              </div>
            </div>
            <div
              className="nation"
              style={{
                backgroundImage: "url(" + { pogoda2 } + ")",
              }}
            >
              <div className="nation__topbox">
                <div className="left">
                  <div className="weather-info">
                    <p>Precipitation: 2%</p>
                    <p>Precipitation: 2%</p>
                    <p>Precipitation: 2%</p>
                  </div>
                </div>
                <div className="right">
                  <h4>new york city</h4>
                  <p>wednesday 00:40</p>
                </div>
              </div>
              <div className="nation__gradus">
                <FaSun className="icon-gradus" />
                <h4>29</h4>
                <span>&#8451;</span>
              </div>
            </div>
            <div
              className="nation"
              style={{
                backgroundImage: "url(" + { pogoda2 } + ")",
              }}
            >
              <div className="nation__topbox">
                <div className="left">
                  <div className="weather-info">
                    <p>Precipitation: 2%</p>
                    <p>Precipitation: 2%</p>
                    <p>Precipitation: 2%</p>
                  </div>
                </div>
                <div className="right">
                  <h4>new york city</h4>
                  <p>wednesday 00:40</p>
                </div>
              </div>
              <div className="nation__gradus">
                <FaSun className="icon-gradus" />
                <h4>29</h4>
                <span>&#8451;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
