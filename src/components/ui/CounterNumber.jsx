import { useState, useEffect, useRef } from "react";

export default function CounterNumber({ targetText }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Ambil angka dari string (contoh: "41+" -> 41, "10.000+" -> 10000)
  const targetNumber = parseInt(targetText.replace(/[^0-9]/g, ""), 10) || 0;

  // Ambil karakter non-angka seperti "+" atau "%"
  const suffix = targetText.replace(/[0-9.]/g, "");

  // Detect saat elemen muncul di viewport (layar)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }, // Animasi jalan jika 30% elemen sudah terlihat
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Jalan animasi counting saat elemen sudah terlihat di layar
  useEffect(() => {
    if (!isVisible || !targetNumber) return;

    let start = 0;
    const duration = 2000; // Durasi total animasi dalam milidetik (2 detik)
    const steps = 40;
    const increment = Math.ceil(targetNumber / steps);
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <span ref={elementRef}>
      {targetNumber > 0 ? count.toLocaleString("id-ID") + suffix : targetText}
    </span>
  );
}
