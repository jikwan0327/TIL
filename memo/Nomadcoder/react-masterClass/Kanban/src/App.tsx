import styled from "styled-components";
import { AnimatePresence, motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  start: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);

  const boxVarients = {
    initial: {
      opcacity: 0,
      scale: 0,
    },
    visible: {
      opcacity: 1,
      scale: 1,
      rotateZ: 360,
    },
    leaving: {
      opcacity: 0,
      scale: 0,
      y: 50,
    },
  };

  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? <Box variants={boxVarients} initial="initial" animate="visible" exit="leaving" /> : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
