import React from 'react';

function InfoBox({ title, data, unit, color = "text-blue-500" }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center m-4 max-w-xs">
      {title && <h3 className="font-Title text-xl font-bold text-gray-700 mb-2">{title}</h3>}
      <p className={`font-Text text-5xl font-bold ${color}`}>{data}</p>
      {unit && <p className="font-Text text-lg text-gray-600 mt-2">{unit}</p>}
    </div>
  );
}

export default InfoBox;