import { useEffect, useState } from "react";
import styled from "styled-components";

const Loader = () => {
  const [dots, setDots] = useState(3);

  useEffect(() => {
    const interval = setInterval(
      () => setDots((prevDots) => setDots(prevDots < 3 ? prevDots + 1 : 0)),
      300
    );
    // cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <div className="loader_container">
        <span className="rocket" />
        <p className="loader_message">
          <span>Loading Data</span>
          {Array.from("...").map((dot, index) => (
            <span
              key={`dot${index}`}
              className={`dot ${index >= dots ? "invisible" : ""}`}
            >
              {dot}
            </span>
          ))}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .loader_container {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 200;
  }
  .rocket {
    width: 32px;
    height: 90px;
    display: block;
    margin: 20px auto;
    position: fixed;
    top: 40%;
    left: 50%;
    translate: -50% -50%;
    border-radius: 50% 50% 0 0;
    border-bottom: 10px solid #ff8000;
    background-color: #d9def1;
    background-image: radial-gradient(
        ellipse at center,
        #d9def1 34%,
        #ff8000 35%,
        #ff8000 54%,
        #d9def1 55%
      ),
      linear-gradient(#ff8000 10px, transparent 0);
    background-size: 28px 28px;
    background-position: center 20px, center 2px;
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: animloaderBack 1s linear infinite alternate;
  }
  .rocket::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 44px;
    border-radius: 50%;
    box-shadow: 0px 15px #ff8000 inset;
    top: 67px;
  }
  .rocket::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 34px;
    height: 34px;
    top: 112%;
    background: radial-gradient(
      ellipse at center,
      #ffdf00 8%,
      rgba(249, 62, 0, 0.6) 24%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 50% 50% 0;
    background-repeat: no-repeat;
    background-position: -44px -44px;
    background-size: 100px 100px;
    box-shadow: 4px 4px 12px 0px rgba(255, 61, 0, 0.5);
    box-sizing: border-box;
    animation: animloader 1s linear infinite alternate;
  }
  .loader_message {
    position: absolute;
    top: calc(40% + 120px);
    width: 100%;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.035ch;
    font-family: monospace;
  }
  .dot {
    font-size: 1.75rem;
    font-weight: 400;
    padding-inline: 0;
    font-family: sans-serif;
  }
  .invisible {
    color: transparent;
  }
  body[theme="light"] .loader_container {
    background-color: #fff;
    background-image: radial-gradient(ellipse at center, #d9def1 55%),
      linear-gradient(#ff8000 10px, transparent 0);
  }
  @media (prefers-color-scheme: light) {
    .loader_container {
      background-color: #fff;
      background-image: radial-gradient(ellipse at center, #d9def1 55%),
        linear-gradient(#ff8000 10px, transparent 0);
    }
  }
  @keyframes animloaderBack {
    0%,
    30%,
    70% {
      transform: translateY(0px);
    }
    20%,
    40%,
    100% {
      transform: translateY(-5px);
    }
  }
  @keyframes animloader {
    0% {
      box-shadow: 4px 4px 12px 2px rgba(255, 61, 0, 0.75);
      width: 34px;
      height: 34px;
      background-position: -44px -44px;
      background-size: 100px 100px;
    }
    100% {
      box-shadow: 2px 2px 8px 0px rgba(255, 61, 0, 0.5);
      width: 30px;
      height: 28px;
      background-position: -36px -36px;
      background-size: 80px 80px;
    }
  }
`;

export default Loader;
