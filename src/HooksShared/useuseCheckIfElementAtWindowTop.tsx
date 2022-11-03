import React, { useLayoutEffect, useState } from "react";

const useCheckIfElementAtWindowTop = (
  element: React.RefObject<HTMLElement>
) => {
  const [areWeAtTheTop, setareWeAtTheTop] = useState(false);

  const checkScrollPosition = () => {
    const nav = element.current as any;

    const navDimens = nav.getBoundingClientRect();
    if (navDimens.top <= 0) {
      setareWeAtTheTop(true);
      console.log(nav, true);
    } else {
      setareWeAtTheTop(false);
      console.log(nav, false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, [element]);

  return areWeAtTheTop;
};

export default useCheckIfElementAtWindowTop;