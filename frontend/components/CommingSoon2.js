import { useCountdown } from "@/utils/countDownHook";
import React, { useEffect, useState } from "react";

const CommingSoon2 = () => {
  const [s, setS] = useState(0);
  const [m, setM] = useState(0);
  const [h, setH] = useState(0);
  const [d, setD] = useState(0);
  const nowDate = new Date().getTime();
  const publishDate = new Date("22 Nov, 2023 22:22:22");
  const timeLeft = publishDate - nowDate;
  const tempS = new Date(timeLeft).getSeconds();

  useEffect(() => {
    setS(tempS);
    setInterval(() => {
      if (s === 0) {
        setS(50);
      } else {
        setS(s - 1);
      }
    }, 1000);
  }, []);
  //   const x = useCountdown(y);
  //   console.log(x);
  return <div>{s}</div>;
};

export default CommingSoon2;
