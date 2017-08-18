import React from 'react';

import AdminCreateFamilies from './admin-create-families';
import AdminFamiliesList from './admin-families-list';

const AdminFamilies = () => {
  return (
    <div>
      <AdminCreateFamilies />
      <AdminFamiliesList />
    </div>
  )
}

export default AdminFamilies;
