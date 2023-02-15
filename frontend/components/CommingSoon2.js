import { useCountdown } from "@/utils/countDownHook";
import React from "react";

const backgroundImage = "/utshob-bg-image.jpeg";
const CommingSoon2 = () => {
  const time = new Date("22 Nov, 2023 22:22:22");
  const x = useCountdown(time);

  return (
    <>
      <div
        className=" w-full bg-left-top h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="grid grid-cols-2 w-10/12 mx-auto">
          <div></div>
          <div className="mt-9">
            <h1 className="text-right text-white text-9xl capitalize font-exo font-bold">
              comming <br /> soon
            </h1>
            <div className="flex justify-end">
              <div className="flex gap-[21px]">
                <div className="w-[80px] font-bold text-[#6d6e70] bg-[#fbae17] rounded-xl flex justify-center items-center text-[27px] h-[48px]">
                  {x[0]} D
                </div>
                <div className="w-[80px] font-bold text-[#6d6e70] bg-[#fbae17]  flex justify-center items-center rounded-xl text-[27px] h-[48px]">
                  {x[1]} H
                </div>
                <div className="w-[80px] font-bold text-[#6d6e70] bg-[#fbae17]  flex justify-center items-center rounded-xl text-[27px] h-[48px]">
                  {x[2]} M
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommingSoon2;
