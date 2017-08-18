import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './admin.css';

import AdminNavbar from './admin-navbar';
import AdminFamilies from './admin-families/admin-families';
import AdminContact from './admin-contact/admin-contact'

const Admin = () => {
  return (
    <Router>
      <div className="admin-container">
        <AdminNavbar />
        <Route path="/admin/families" component={AdminFamilies} />
        <Route path="/admin/contact" component={AdminContact} />
      </div>
    </Router>

  )
}

export default Admin;
