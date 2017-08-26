import React from 'react';

import AdminArtworksListItem from './admin-artworks-list-item';

const AdminArtworksList = ({artworks, selectedFamilyId}) => {


  if(!selectedFamilyId) {
    return <p>Select a family</p>
  }

  const artworksByFamilyId = artworks.filter(artwork => artwork.family === selectedFamilyId)
  const artworksList = artworksByFamilyId.map(artwork => {
      return <AdminArtworksListItem key={artwork._id} artworks={artwork} />
  })

  return (
    <div>
      {selectedFamilyId}
      <ul>
        {artworksList}
      </ul>
    </div>
  )
}

export default AdminArtworksList;
