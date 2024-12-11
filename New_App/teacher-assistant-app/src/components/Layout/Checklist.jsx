import React, { useState } from 'react';

import ChecklistItem from './ChecklistItem';

const Checklist = () => {
  const [todos, setTodos] = useState(['', '', '']);

  const addTodo = () => {
    setTodos([...todos, '']);
  };

  const updateTodo = (index, value) => {
    const newTodos = [...todos];
    newTodos[index] = value;
    setTodos(newTodos);
  };

  return (
    <div className="w-64 ml-4">
      <div className="border border-gray-300 rounded-lg p-4">
        <h3 className="font-semibold mb-4">Checklist</h3>
        <div className="space-y-3">
          {todos.map((todo, index) => (
            <ChecklistItem
              key={index}
              todo={todo}
              onChange={(value) => updateTodo(index, value)}
              onCheck={() => {}}
            />
          ))}
          <button
            onClick={addTodo}
            className="mt-2 flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            {//<Plus size={16} className="mr-1" /> Add more to do
}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
