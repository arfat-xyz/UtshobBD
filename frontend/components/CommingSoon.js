import React, { useEffect, useRef, useState } from "react";
// import useCountDown from "react-countdown-hook";
const initialTime = 60 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000
// const countDownDate =
//   new Date("27 Nov 2023 23:01:22").getTime() - new Date().getTime();
const CommingSoon = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("20:00:10");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  // const [timeLeft, { start, pause, resume, reset }] = useCountDown({
  //   initialTime,
  //   interval,
  // });
  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    const temp = new Date("26 Nov, 2023 22:22:22").getTime() / 1000;
    console.log(temp);
    deadline.setSeconds(temp - deadline.getSeconds());
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <>
      {/* this is for md to large device  */}
      <div
        className="w-100 hidden md:block  min-h-screen 
        bg-[url('https://i.ibb.co/r0d6Ptd/Utshob-BD-bg.jpg')]
         bg-cover 
       "
      >
        <div className="grid grid-cols-2">
          <div></div>
          <div>
            <div className="grid grid-cols-4">
              <div></div>
              <div>
                <h1 className="text-6xl font-bold text-white col-span-3">
                  Coming <br /> Soon!
                </h1>
                <div className="grid grid-cols-4 text-white text-2xl">
                  <h2>{timer}</h2>
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
