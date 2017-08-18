import React from 'react';

import AdminNavbar from './admin-navbar';
import AdminFamilies from './admin-families/admin-families';
import AdminContact from './admin-contact/admin-contact'

const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <AdminFamilies />
      <AdminContact />
    </div>
  )
}

export default Admin;
