import React from "react";

const LaunchButton = ({
  launchButtonText,
  showModal
}) => {
  return (
    <a
      href="#about"
      onClick={showModal}>{launchButtonText}
    </a>
  );
};

export default LaunchButton;