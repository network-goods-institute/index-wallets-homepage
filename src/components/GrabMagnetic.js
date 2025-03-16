import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GrabMagnetic = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current?.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = (e) => {
      xTo(0);
      yTo(0);
    };

    ref.current?.addEventListener("mouseleave", mouseLeave);
    ref.current?.addEventListener("mousemove", mouseMove);

    return () => {
      ref.current?.removeEventListener("mouseleave", mouseLeave);
      ref.current?.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default GrabMagnetic;
