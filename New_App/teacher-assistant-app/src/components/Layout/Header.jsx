import React from 'react';

const Header = ({ title }) => {
  const headerActions = [1, 2, 3, 4];

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="text-xl font-semibold p-2 border border-gray-300 rounded-lg w-full max-w-md">
        {title}
      </div>
      <div className="flex space-x-2">
        {headerActions.map((num) => (
          <button
            key={num}
            className="w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-50"
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
