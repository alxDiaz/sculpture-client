import React from 'react';

const AdminFamiliesListItem = ({family}) => {

  return (
    <li className="admin-families-list-item">
      {family.title}
    </li>
  )
}

export default AdminFamiliesListItem;
