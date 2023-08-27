import { useEffect, useRef, useState } from "react";
const useResize = () => {
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);

  const getWidth = () => {
    let width = ref.current?.clientWidth;
    let height = ref.current?.clientHeight;
    setClientWidth(width as number);
    setClientHeight(height as number);
  };

  useEffect(() => {
    if (clientWidth && clientHeight) {
      window.addEventListener("resize", () => {
        getWidth();
      });
    } else {
      getWidth();
    }
  });

  return {
    clientHeight,
    clientWidth,
    ref,
  };
};

export default useResize;
