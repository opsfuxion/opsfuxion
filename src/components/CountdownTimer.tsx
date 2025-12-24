import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  hours?: number;
}

const CountdownTimer = ({ hours = 24 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("countdown-end");
    if (saved) {
      const endTime = parseInt(saved);
      const remaining = Math.max(0, endTime - Date.now());
      return remaining;
    }
    const endTime = Date.now() + hours * 60 * 60 * 1000;
    localStorage.setItem("countdown-end", endTime.toString());
    return hours * 60 * 60 * 1000;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = Math.max(0, prev - 1000);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return { hrs, mins, secs };
  };

  const { hrs, mins, secs } = formatTime(timeLeft);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        className="glass-card neon-border w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
      >
        <span className="font-orbitron text-2xl md:text-3xl font-bold neon-text">
          {value.toString().padStart(2, "0")}
        </span>
      </motion.div>
      <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-40"
    >
      <div className="glass-card gold-border p-4 md:p-6 rounded-2xl max-w-sm mx-auto md:mx-0">
        <p className="text-center text-sm font-medium gold-text mb-3 font-orbitron">
          ⚡ LIMITED TIME OFFER
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <TimeBlock value={hrs} label="Hours" />
          <span className="neon-text text-2xl font-bold mb-6">:</span>
          <TimeBlock value={mins} label="Mins" />
          <span className="neon-text text-2xl font-bold mb-6">:</span>
          <TimeBlock value={secs} label="Secs" />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-3">
          50% OFF Strategy Session — Ends Soon
        </p>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
