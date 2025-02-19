"use client";
import { useRef } from "react";

const LongPressWrapper = ({ onLongPress, delay = 500, children }) => {
  const timerRef = useRef(null);

  const startPressTimer = () => {
    timerRef.current = setTimeout(() => {
      onLongPress();
    }, delay);
  };

  const clearPressTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div
      onMouseDown={startPressTimer}
      onMouseUp={clearPressTimer}
      onMouseLeave={clearPressTimer}
      onTouchStart={startPressTimer}
      onTouchEnd={clearPressTimer}
    >
      {children}
    </div>
  );
};

export default LongPressWrapper;
