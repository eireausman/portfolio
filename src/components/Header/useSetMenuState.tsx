import React, { useEffect, useState } from "react";

interface menuStateOutcome {
  showMenu: boolean;
  spinHand: boolean;
}

const stateChanger = (menuHoverState: boolean) => {
  if (menuHoverState === true) {
    const outcome = { showMenu: true, spinHand: true };
    return outcome;
  } else {
    const outcome = { showMenu: false, spinHand: false };
    return outcome;
  }
};

const useSetMenuState = (menuHoverState: boolean) => {
  const [menuState, setMenuState] = useState<menuStateOutcome>({
    showMenu: false,
    spinHand: false,
  });

  useEffect(() => {
    setMenuState(() => stateChanger(menuHoverState));
  }, [menuHoverState]);

  return menuState;
};

export default useSetMenuState;
