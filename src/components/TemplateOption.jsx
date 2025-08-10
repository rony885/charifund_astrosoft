import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TemplateOption = () => {
  // false = light mode, true = dark mode
  const [isDark, setIsDark] = useState(false);

  // On mount, ensure body class matches state
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-body");
    } else {
      document.body.classList.remove("dark-body");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Wrapper>
      <div className="color-palate">
        <button
          className="color-trigger"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .color-palate {
    top: 14% !important;
  }
`;

export default TemplateOption;
