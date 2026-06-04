import React, { useState } from "react";

function NewPlantForm({ addPlant }) {

// Tracks the current values typed into the form inputs
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  // Update the matching form field whenever the user types
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Send the new plant to the backend, then update the UI with the saved plant
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newPlant) => {
        addPlant(newPlant)
      });

    setFormData({
      name: "",
      image: "",
      price: "",
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
