import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, searchTerm, setSearchTerm, addPlant, loading }) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} loading={loading} />
    </main>
  );
}

export default PlantPage;
