// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Layout/Header';
import Checklist from '../components/Layout/Checklist';

const Home = () => {
  return (
    <>
      <Header title="Home Dashboard" />
      <div className="flex">
        <div className="flex-1">
          <div className="space-y-4 mb-6">
            {[1, 2].map((num) => (
              <input
                key={num}
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Text Field"
              />
            ))}
          </div>
          <div className="mt-auto">
            <div className="w-full p-2 border border-gray-300 rounded-lg">
              Footer
            </div>
          </div>
        </div>
        <Checklist />
      </div>
    </>
  );
};

export default Home;
