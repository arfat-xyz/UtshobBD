import React, { useEffect, useState } from "react";
import useCountDown from "react-countdown-hook";
const initialTime = 60 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000
// const countDownDate =
//   new Date("27 Nov 2023 23:01:22").getTime() - new Date().getTime();
const CommingSoon = () => {
  const [timeLeft, { start, pause, resume, reset }] = useCountDown({
    initialTime,
    interval,
  });

  // console.log(countDownDate);
  console.log(timeLeft);
  return (
    <>
      {/* this is for md to large device  */}
      <div
        // bg-[url('https://i.ibb.co/r0d6Ptd/Utshob-BD-bg.jpg')]
        className="w-100 hidden md:block  min-h-screen 
        
         bg-cover 
      bg-blend-darken bg-slate-600"
      >
        <div className="grid grid-cols-2">
          <div></div>
          <div>
            <div className="grid grid-cols-4">
              <div></div>
              <div>
                <h1 className="text-6xl font-bold text-white col-span-3">
                  Comming <br /> Soon
                </h1>
                <div className="grid grid-cols-4 text-white text-2xl">
                  {/* <p>{days}</p>
                  <p>{hours}</p>
                  <p>{minutes}</p> */}
                  {/* <p>{seconds}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommingSoon;
