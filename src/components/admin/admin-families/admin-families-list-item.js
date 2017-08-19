import React from 'react';

import AdminCreateArtworks from './admin-artworks/admin-create-artworks';

const AdminFamiliesListItem = ({family}) => {

  return (
    <div>
      <li className="admin-families-list-item">
        {family.title}
      </li>
      <AdminCreateArtworks family={family} />
    </div>
  )
}

export default AdminFamiliesListItem;
