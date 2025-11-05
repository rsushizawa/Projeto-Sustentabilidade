import React from 'react';
import Plot from 'react-plotly.js';

function Graph({ data, layout }) {
  const plotData = Array.isArray(data) ? data : [data];

  return (
    <div>
      <Plot data={plotData} layout={layout} />
    </div>
  );
}

export default Graph;
