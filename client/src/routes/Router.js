import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/dashboard' element={<Dashboard />} />}
      />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
