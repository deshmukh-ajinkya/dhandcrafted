import React, { useState } from "react";
import AddIcon from "../../assets/add.png";
import Landscape from "../../assets/special-1.jpg";
import Portrait from "../../assets/portrait.jpg";
import "../admin/style.css"; // Import the CSS file

export function Admin() {
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (buttonType) => {
    setClickedButton(buttonType);
    console.log(`${buttonType} button clicked`);
    setTimeout(() => setClickedButton(null), 200); // Reset clicked state after 200ms
  };

  return (
    <div className="admin-container">
      <p className="admin-title">Admin</p>
      <div className="admin-content">
        <div className="admin-box">
          <img src={AddIcon} alt="Add Icon" className="addIconImg" />
        </div>
        <div className="admin-input-container">
          <input type="text" className="admin-input" placeholder="Title" />
          <input type="text" className="admin-input" placeholder="Price" />
          <input
            type="text"
            className="admin-input"
            placeholder="Select Category"
          />
          <div className="admin-button-container">
            <p
              className={`admin-button add-button ${
                clickedButton === "Add" ? "clicked" : ""
              }`}
              onClick={() => handleClick("Add")}
            >
              Add
            </p>
            <p
              className={`admin-button update-button ${
                clickedButton === "Update" ? "clicked" : ""
              }`}
              onClick={() => handleClick("Update")}
            >
              Update
            </p>
            <p
              className={`admin-button delete-button ${
                clickedButton === "Delete" ? "clicked" : ""
              }`}
              onClick={() => handleClick("Delete")}
            >
              Delete
            </p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="image-box">
          <img src={Landscape} alt="Landscape" className="responsive-image" />
          <p className="image-title">Landscape Title</p>
          <p className="image-price">Price</p>
        </div>
        <div className="image-box">
          <img src={Portrait} alt="Portrait" className="responsive-image" />
          <p className="image-title">Portrait Title</p>
          <p className="image-price">Price</p>
        </div>
      </div>
    </div>
  );
}
