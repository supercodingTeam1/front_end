import { useEffect, useRef } from "react";

export default function useEffectOnUpdates(callback, deps) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      console.log("ddd");
      firstRender.current = false;
    } else {
      callback();
    }
  }, deps);
}
