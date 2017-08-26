import React from 'react';

const AdminArtworksListItem = ({artworks}) => {
  return (
    <div>
      <li key={artworks._id}>{artworks.name}</li>
    </div>
  )
}

export default AdminArtworksListItem;
