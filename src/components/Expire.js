/**
    Adapted from:
    https://stackoverflow.com/a/64365185
*/
import React, { useEffect, useState } from "react";

const Expire = ({delay, className, children}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Automatically display element if no delay provide
    if (!delay) {
      setVisible(true);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, delay);
    return () => clearTimeout(timer)
  }, [delay]);

  return visible ? 
    <div className={className}>{children}</div> : 
    <></>;
};

export default Expire;