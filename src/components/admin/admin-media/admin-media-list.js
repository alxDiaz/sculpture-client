import React from 'react';

//import AdminFamiliesListItem from './admin-families-list-item';
//import AdminCreateMedia from './admin-media/admin-create-media';

const AdminMediaList = (props) => {

  const mediaItems = props.medias.map((item) => {
    // console.log(item)
    return <li className="admin-media-item" key={item._id}> {item.title}</li>
  })

  return (
    <div className="admin-media-list">
      <ul>
        {mediaItems}
      </ul>
    </div>
  )
}



export default AdminMediaList;