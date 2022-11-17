import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Tickets from '../pages/Tickets';
import Property from '../pages/Property';
import Settings from '../pages/Settings';
import EventSigns from '../pages/EventSigns';

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/dashboard' element={<Dashboard />} />}
      />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/tickets' element={<Tickets />} />
      <Route path='/property' element={<Property />} />
      <Route path='/events' element={<EventSigns />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  );
};

export default Router;
