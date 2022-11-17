import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/DashboardUser';
import Tickets from '../pages/Tickets';
import Property from '../pages/Property';
import Settings from '../pages/Settings';
import EventSigns from '../pages/EventSigns';
import NewTicket from '../pages/NewTicket';

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/dashboard/user' element={<Dashboard />} />}
      />
      <Route path='/dashboard/user' element={<Dashboard />} />
      <Route path='/tickets' element={<Tickets />} />
      <Route path='/newticket' element={<NewTicket />} />
      <Route path='/property' element={<Property />} />
      <Route path='/events' element={<EventSigns />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  );
};

export default Router;
