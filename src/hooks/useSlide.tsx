import { useState, useRef, useEffect } from "react";

const useSlide = () => {
  const [IsClicked, setIsClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eventHandler = () => {
      setIsClicked(false);
    };

    document.body.addEventListener("click", eventHandler);

    return () => {
      document.body.removeEventListener("click", eventHandler);
    };
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
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
