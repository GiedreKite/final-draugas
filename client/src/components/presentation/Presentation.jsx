import React from 'react';
import ReactIframe from 'react-iframe';

 export function Presentation() {
  // https://authentic-europe-553751.framer.app/
  return (
    <ReactIframe
      url="./presentation.mp4"
      width="100%"
      height="100%"
    />
  );
}

