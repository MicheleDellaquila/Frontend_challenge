import { useEffect, useState } from "react";

const useWindowsSize = () => {
  const [width, setWidth] = useState<number>(window.screen.width);

  // save width
  const saveWidth = () => {
    setWidth(window.screen.width);
  };

  // change width
  useEffect(() => {
    window.addEventListener("resize", saveWidth);

    return () => {
      window.removeEventListener("resize", saveWidth);
    };
  }, []);

  return width;
};

export default useWindowsSize;
