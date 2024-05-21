 import { useEffect } from "react";
const useEventListener = (eventName, handler, target = window, capture = false, passive = false) => {
    useEffect(() => {
      if (!target || !target.addEventListener) return;
  
      target.addEventListener(eventName, handler, { capture, passive });
  
      return () => {
        target.removeEventListener(eventName, handler, { capture });
      };
    }, [eventName, handler, target, capture, passive]);
  };

  export default useEventListener;