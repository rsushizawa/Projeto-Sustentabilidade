import React from 'react';

function ThreeColumn({ columns }) {
  return (
    <div className="flex flex-wrap justify-center gap-8 w-full mt-10">
      {columns.map((col, index) => (
        <div key={index} className="bg-white/20 p-6 rounded-lg shadow-lg max-w-md backdrop-blur-sm">
          <h3 className="font-Title text-3xl font-bold text-black mb-4">{col.title}</h3>
          <ul className="list-disc pl-6 text-left font-Text text-lg">
            {col.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ThreeColumn;