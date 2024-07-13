"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Countdown.css";

const Countdown = ({ date }) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const calculateTimeLeft = () => {
    const Countdowndate = new Date(date).getTime();
    const now = new Date().getTime();
    const distance = Countdowndate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const updateCountdown = () => {
      const { days, hours, minutes, seconds } = calculateTimeLeft();
      setDays(days < 10 ? `0${days}` : days);
      setHours(hours < 10 ? `0${hours}` : hours);
      setMinutes(minutes < 10 ? `0${minutes}` : minutes);
      setSeconds(seconds < 10 ? `0${seconds}` : seconds);
    };

    updateCountdown(); // Initial call to set the countdown immediately

    interval.current = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval.current);
  }, [date]);

  return (
    <div className="flex  mx-auto">
      <section>
        <p className="label">days</p>
        <p className="value">{days}</p>
      </section>
      <section>
        <p className="label">hours</p>
        <p className="value">{hours}</p>
      </section>
      <section>
        <p className="label">minutes</p>
        <p className="value">{minutes}</p>
      </section>
      <section>
        <p className="label">seconds</p>
        <p className="value">{seconds}</p>
      </section>
    </div>
  );
};

export default Countdown;
