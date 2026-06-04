import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  // Stores the full list of plants fetched from the backend
  const [plants, setPlants] = useState([]);

  // Tracks whether the initial plant fetch is still loading
  const [loading, setLoading] = useState(true);

  // Tracks the current search input value
  const [searchTerm, setSearchTerm] = useState("")

  // Fetch all plants from the backend when the app first loads
  function fetchPlants() {

    setLoading(true);

    fetch("http://localhost:6001/plants")
      .then((response) => {
        // Throw an error if the request was unsuccessful
        if (!response.ok) {
          throw new Error("Fetch failed")
        }

        return response.json();
      })

      .then((data) => {

        // Store the retrieved plants in state and remove the loading indicator
        setPlants(data);
      })
      .catch((error) => {

        // Log any request failures and stop showing the loading indicator
        console.error('Fetch error:', error);
      })
      .finally(() => {
        // Clear the loading state once the request completes,
        // regardless of whether it succeeded or failedF
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchPlants()
  }, []);

  // Only show plants whose names match the current search term
  const filteredPlants = plants.filter((plant) => (
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  // Add a newly-created plant to state after it is saved to the backend
  function addPlant(newPlant) {
    setPlants((currentPlants) => [...plants, newPlant])
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={filteredPlants}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        addPlant={addPlant}
        loading={loading}
      />
    </div>
  );
}

export default App;
