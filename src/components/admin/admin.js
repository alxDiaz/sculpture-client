import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './admin.css';

import AdminNavbar from './admin-navbar';
import AdminFamilies from './admin-families/admin-families';
import AdminContact from './admin-contact/admin-contact';
import AdminExpos from './admin-expos/admin-expos';
import AdminMedia from './admin-media/admin-media'

const Admin = () => {
  return (
    <Router>
      <div className="admin-container">
        <AdminNavbar />
        <Route path="/admin/families" component={AdminFamilies} />
        <Route path="/admin/contact" component={AdminContact} />
        <Route path="/admin/expositions" component={AdminExpos} />
        <Route path="/admin/media" component={AdminMedia} />
      </div>
    </Router>

  )
}

export default Admin;
