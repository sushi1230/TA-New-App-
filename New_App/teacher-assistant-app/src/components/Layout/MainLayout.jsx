import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>
        <h1>Main Layout</h1>
      </header>
      <main>
        <Outlet /> {/* This will render nested routes */}
      </main>
    </div>
  );
};

export default MainLayout;
