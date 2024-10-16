import { FC, useEffect, useRef, useState } from "react";

type TimerProps = object;

export const Timer: FC<TimerProps> = () => {
  const now = () =>
    new Date().toLocaleString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

  const timeIntervalRef = useRef<number | string | null>(null);
  const [time, setTime] = useState<string>(now);

  useEffect(() => {
    timeIntervalRef.current = window.setInterval(() => {
      setTime(now);
    }, 1000);
  }, []);

  return <span className="text-timer text-3xl select-none">{time}</span>;
};
