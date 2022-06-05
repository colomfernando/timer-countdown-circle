import React from 'react';

const RestartIcon: React.FC = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={40}
      height={40}
      style={{
        background: 'new 0 0 485 485',
        fill: 'inherit',
      }}
      xmlSpace="preserve"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12.75 8a4.5 4.5 0 01-8.61 1.834l-1.391.565A6.001 6.001 0 0014.25 8 6 6 0 003.5 4.334V2.5H2v4l.75.75h3.5v-1.5H4.352A4.5 4.5 0 0112.75 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default RestartIcon;
