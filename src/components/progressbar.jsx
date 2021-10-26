import React from 'react';
import ProgressBar from 'react-bootstrap/Progressbar';

function Progressbar({ subproject }) {
  const { agendaDone, agendaStuck, agendaProgress, agendaCount } = subproject;

  const calculate = (x) => {
    return Math.round((x * 100) / agendaCount);
  };
  return (
    <ProgressBar>
      <ProgressBar animated striped variant="success" now={calculate(agendaDone)} key={1} />
      <ProgressBar animated stiped variant="warning" now={calculate(agendaProgress)} key={2} />
      <ProgressBar animated striped variant="danger" now={calculate(agendaStuck)} key={3} />
    </ProgressBar>
  );
}

export default Progressbar;
