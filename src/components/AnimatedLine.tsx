import { motion } from "framer-motion";
import styled from "styled-components";

export function AnimatedLineDesktop() {
  return (
    <StyledCurve
      width="1364"
      height="5000"
      viewBox="0 0 1364 5000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      desktop
    >
      <mask
        id="mask0_216_84"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="-1"
        width="1367"
        height="3902"
      >
        <motion.path
          d="M4 0C45 201.167 280.8 617.4 896 673C1665 742.5 1109.5 1517 773 1746.5C436.5 1976 367 2435.5 725 2660C1083 2884.5 1638 3017.5 1205.5 3899"
          stroke="black"
          strokeWidth="7"
          strokeDasharray="5000"
          strokeDashoffset="5000"
          animate={{
            strokeDashoffset: [5000, 0, 5000],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </mask>
      <g mask="url(#mask0_216_84)">
        <rect x="-156" width="1519" height="3899" fill="white" />
      </g>
    </StyledCurve>
  );
}

export function AnimatedLineMobile() {
  return (
    <StyledCurve
      width="1364"
      height="5000"
      viewBox="0 0 1364 5000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      mobile
    >
      <mask
        id="mask0_216_84"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="-1"
        width="1367"
        height="3902"
      >
        <motion.path
          d="M4 0C45 201.167 280.8 617.4 896 673C1665 742.5 1109.5 1517 773 1746.5C436.5 1976 367 2435.5 725 2660C1083 2884.5 1638 3017.5 1205.5 3899"
          stroke="black"
          strokeWidth="7"
          strokeDasharray="5000"
          strokeDashoffset="5000"
          animate={{
            strokeDashoffset: [5000, 0, 5000],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </mask>
      <g mask="url(#mask0_216_84)">
        <rect x="-156" width="1519" height="3899" fill="white" />
      </g>
    </StyledCurve>
  );
}

const StyledCurve = styled.svg<{ mobile?: boolean; desktop?: boolean }>`
  display: ${(props) => (props.mobile ? "none" : "block")};
  position: absolute;
  top: 6rem;
  left: -9rem;
  z-index: 0;

  @media (max-width: 768px) {
    display: ${(props) => (props.desktop ? "none" : "block")};
    top: 4rem;
    left: -3rem;
  }
`;
