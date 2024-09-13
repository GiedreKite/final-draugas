import React from 'react';
import ReactIframe from 'react-iframe';

function Presentation() {
  return (
    <ReactIframe
      url="./presentation.mp4"
      width="100%"
      height="100%"
    />
  );
}

export default Presentation;