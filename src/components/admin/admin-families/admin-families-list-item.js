import React from 'react';

const AdminFamiliesListItem = ({family, onFamilySelect}) => {

  return (
    <li className="admin-families-list-item" onClick={() => onFamilySelect(family.title, family._id)}>
      {family.title}
    </li>
  )
}

export default AdminFamiliesListItem;
