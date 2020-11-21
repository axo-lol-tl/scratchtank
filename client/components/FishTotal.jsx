import React from 'react';

const fishTotal = (props) => (
  <div className="innerbox" id="totals">
    <label htmlFor="totalCards">Total Fish:</label>
    <span id="totalCards">{props.totalCards}</span>
  </div>
);
export default fishTotal;
