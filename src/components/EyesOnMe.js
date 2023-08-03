import React, { useState } from "react";

function EyesOnMe() {
  const [focus, setFocus] = useState(false);

  function toggle() {
    setFocus(!focus);
  }

  return (
    <button onClick={toggle} onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
      {focus ? "Good" : "Hey, eyes on me!"}
    </button>
  );
}

export default EyesOnMe;