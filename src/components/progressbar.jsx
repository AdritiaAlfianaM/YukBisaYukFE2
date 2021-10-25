import React from 'react';
import ProgressBar from 'react-bootstrap/progressbar';

function Progressbar() {
  return (
    <ProgressBar>
      <ProgressBar animated striped variant="success" now={35} key={1} />
      <ProgressBar animated variant="warning" now={20} key={2} />
      <ProgressBar animated striped variant="danger" now={10} key={3} />
    </ProgressBar>
  );
}

export default Progressbar;
