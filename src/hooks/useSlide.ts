import { useState, useRef } from "react";

const useSlide = () => {
  const [IsClicked, setIsClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsClicked((IsClicked) => !IsClicked);
    // ref.current?.classList.toggle(".movein");
  };

  return {
    IsClicked,
    ref,
    handleClick,
  };
};

export default useSlide;
