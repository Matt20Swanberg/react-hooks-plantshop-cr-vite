import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, loading }) {

  // Show a loading message while plants are being fetched
  if(loading){
    return <p>Loading plants...</p>
  }

  // Show an empty state when the search has no matching results
  if (plants.length === 0) {
    return (
      <div className="empty-state">
        <p>No plants found. </p>
        <p>Try editing your search, or add a new plant above!</p>
      </div>
    )
  }
  return (
    <ul className="cards">
      {/* Render one PlantCard for each plant */}
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
