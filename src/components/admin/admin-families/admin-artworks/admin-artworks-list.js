import React from 'react';

import AdminArtworksListItem from './admin-artworks-list-item';

const AdminArtworksList = ({artworks, selectedFamilyId, onArtworkSelect}) => {


  if(!selectedFamilyId) {
    return <p>Select a family</p>
  }

  const artworksByFamilyId = artworks.filter(artwork => artwork.family === selectedFamilyId)
  const artworksList = artworksByFamilyId.map(artwork => {
      return (
        <AdminArtworksListItem
          key={artwork._id}
          artworks={artwork}
          onArtworkSelect={onArtworkSelect}/>
      )
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
