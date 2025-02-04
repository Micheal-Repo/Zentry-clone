Yes, you can use libraries like Framer Motion or React Spring to create mouse move interactions that make a box rotate or transform based on mouse movements. Here's how you can do it with each:


---

1. Using Framer Motion

Framer Motion is a popular library for creating animations in React. Here's an example:

npm install framer-motion

import React, { useState } from "react";
import { motion } from "framer-motion";

const MouseMoveInteraction = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
    const y = (clientY / window.innerHeight) * 2 - 1;
    setPosition({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <motion.div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#007bff",
          borderRadius: 10,
        }}
        animate={{
          rotateX: position.y * 30, // Rotate based on mouse Y position
          rotateY: position.x * 30, // Rotate based on mouse X position
        }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </div>
  );
};

export default MouseMoveInteraction;


---

2. Using React Spring

React Spring is another great library for animations in React. Here's an example:

npm install @react-spring/web

import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const MouseMoveInteraction = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const props = useSpring({
    transform: `rotateX(${coords.y * 30}deg) rotateY(${coords.x * 30}deg)`,
    config: { tension: 300, friction: 10 },
  });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
    const y = (clientY / window.innerHeight) * 2 - 1;
    setCoords({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <animated.div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#28a745",
          borderRadius: 10,
          ...props,
        }}
      />
    </div>
  );
};

export default MouseMoveInteraction;


---

3. Vanilla React (without libraries)

If you prefer not to use a library, you can achieve this with React and CSS transform:

import React, { useState } from "react";

const MouseMoveInteraction = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;

    setStyle({
      transform: `rotateX(${y * 30}deg) rotateY(${x * 30}deg)`,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#ff5722",
          borderRadius: 10,
          ...style,
        }}
      />
    </div>
  );
};

export default MouseMoveInteraction;


---

These examples should help you get started with creating mouse move interactions for your React project. Let me know if you need further assistance!

