import React from 'react';

const AdminArtworksListItem = ({artworks, onArtworkSelect}) => {
  return (
    <div>
      <li key={artworks._id} onClick={() => onArtworkSelect(artworks.name, artworks._id)}>{artworks.name}</li>
    </div>
  )
}

export default AdminArtworksListItem;
