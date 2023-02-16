import { useCountdown } from "@/utils/countDownHook";
import React from "react";

import { MdLocationOn } from "react-icons/md";
const CommingSoon = () => {
  const time = new Date("22 Nov, 2023 22:22:22");
  const timeLeft = useCountdown(time);
  console.log(timeLeft);
  return (
    <>
      <div
        className={`w-full bg-left-top h-screen md:bg-[url('/utshob-bg-image.jpeg')] 
        bg-[url('/utshob-mobile-bg.jpg')] bg-cover bg-no-repeat`}
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        // }}
      >
        <div className=" w-10/12 mx-auto">
          <div className="pt-9 h-screen flex justify-center items-center flex-col md:block">
            <h1 className="md:text-right text-white text-7xl text-center lg:text-9xl md:text-6xl capitalize font-exo font-bold">
              comming <br /> soon
            </h1>
            <div className="flex justify-end">
              <div className="flex gap-[21px]">
                <div className="w-[80px] font-bold text-[#6d6e70] bg-[#fbae17] rounded-xl flex justify-center items-center text-[27px] h-[48px]">
                  {timeLeft[0]} D
                </div>
                <div className="w-[80px] font-bold text-[#6d6e70] bg-[#fbae17]  flex justify-center items-center rounded-xl text-[27px] h-[48px]">
                  {timeLeft[1]} H
                </div>
                <div className="w-[80px] font-bold text-[#6d6e70] bg-[#fbae17]  flex justify-center items-center rounded-xl text-[27px] h-[48px]">
                  {timeLeft[2]} M
                </div>
              </div>
            </div>
            <div className="md:h-[75%] lg:h-[50%] h-[55%] flex justify-end items-end">
              <div className="flex text-[#fbae17] ">
                <p className="capitalize font-bold font-exo text-2xl text-right">
                  find us on <br />
                  the map
                </p>
                <MdLocationOn size={70} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommingSoon;
