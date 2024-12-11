import React from 'react';

const ChecklistItem = ({ todo, onChange, onCheck }) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" className="mr-2" onChange={onCheck} />
      <input
        type="text"
        value={todo}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border-b border-gray-200 focus:outline-none focus:border-blue-500"
        placeholder="Enter task..."
      />
    </div>
  );
};

export default ChecklistItem;
