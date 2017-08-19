import React from 'react';

import AdminFamiliesListItem from './admin-families-list-item';

const AdminFamiliesList = (props) => {

  const familyItems = props.families.map((item) => {
    console.log(item)
    return <AdminFamiliesListItem key={item._id} family={item} />
  })

  return (
    <div className="admin-families-list">
      <ul>
        {familyItems}
      </ul>
      
    </div>
  )
}



export default AdminFamiliesList;
