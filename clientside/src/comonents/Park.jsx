import React, { useState } from "react";
import { TimePicker, message } from "antd";
import car1 from "../utils/car1.png";
import car2 from "../utils/car2.png";
const Park = () => {
  const [isActive, setActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTime, setIsTime] = useState(false);

  const handleClick = (event) => {
    setActive((current) => !current);
  };
  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setTimeout(() => {
      message.success("Booking Successfull");
    }, 2400);
  };

  const handleTimeClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsTime(true);
    }, 2000);
  };
  return (
    <div className="p-main">
      {isLoading ? (
        <>
          <div class="d-flex justify-content-center spin">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-top">
            <div className="p-top-sub">
              <div className="p-time">
                <TimePicker.RangePicker />
                <button
                  style={{
                    border: "none",
                    marginLeft: "20px",
                    padding: "2px",
                    width: "90px",
                    height: "32px",
                  }}
                  onClick={handleTimeClick}
                >
                  search
                </button>
              </div>
              <div className="p-zones">
                <button className="p-zone-btnactive">zone 1</button>
                <button className="p-zone-btn">zone 2</button>
                <button className="p-zone-btn">zone 3</button>
              </div>
            </div>
          </div>

          {isTime ? (
            <>
              <div className="p-bottom">
                <div className="p-block">
                  <div className="p-b-left">
                    <div
                      className={
                        isActive
                          ? "p-b-l-sub click-active"
                          : "p-b-l-sub activegreen"
                      }
                      onClick={handleClick}
                    >
                      A-01
                    </div>
                    <div className="p-b-l-sub activegreen">A-02</div>
                    <div className="p-b-l-sub active">
                      <img className="car-img" src={car1} alt="" />
                    </div>
                    <div className="p-b-l-sub activegreen">A-04</div>
                    <div className="p-b-l-sub activered">A-05</div>
                  </div>
                  <div className="p-b-right">
                    <div className="p-b-l-sub active">
                      <img className="car-img2" src={car2} alt="" />
                    </div>
                    <div className="p-b-l-sub activered">A-07</div>
                    <div className="p-b-l-sub activegreen">A-08</div>
                    <div className="p-b-l-sub activegreen">A-09</div>
                    <div className="p-b-l-sub activegreen">A-10</div>
                  </div>
                </div>
              </div>
              <div className="div-btn">
                <button onClick={handleSubmit} className="c-btn">
                  Confirm Booking
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="p-bottom">
                <div className="p-block">
                  <div className="p-b-left">
                    <div
                      className={
                        isActive
                          ? "p-b-l-sub click-active"
                          : "p-b-l-sub activegreen"
                      }
                      onClick={handleClick}
                    >
                      A-01
                    </div>
                    <div className="p-b-l-sub activegreen">A-02</div>
                    <div className="p-b-l-sub activered">A-03</div>
                    <div className="p-b-l-sub activegreen">A-04</div>
                    <div className="p-b-l-sub active">
                      <img className="car-img" src={car1} alt="" />
                    </div>
                  </div>
                  <div className="p-b-right">
                    <div className="p-b-l-sub active">A-06</div>
                    <div className="p-b-l-sub activered">A-07</div>
                    <div className="p-b-l-sub activegreen">A-08</div>
                    <div className="p-b-l-sub activered">A-09</div>
                    <div className="p-b-l-sub activegreen">A-10</div>
                  </div>
                </div>
              </div>
              <div className="div-btn">
                <button onClick={handleSubmit} className="c-btn">
                  Confirm Booking
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Park;