import React from 'react';

import AdminFamiliesListItem from './admin-families-list-item';
import AdminCreateArtworks from './admin-artworks/admin-create-artworks';

const AdminFamiliesList = (props) => {

  const familyItems = props.families.map((item) => {
    // console.log(item)
    return <AdminFamiliesListItem key={item._id} family={item} />
  })

  return (
    <div className="admin-families-list">
      <ul>
        {familyItems}
      </ul>
      <AdminCreateArtworks family={props.families}/>
    </div>
  )
}



export default AdminFamiliesList;