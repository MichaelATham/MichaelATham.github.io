import React from "react";
import Typewriter from "typewriter-effect";

function TypeEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Engineering Student",
          "Cybersecurity Enthusiast",
          "AI/LLM Explorer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeEffect;
