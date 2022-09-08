import React from "react";

const ShelfChanger = ({ value, changeShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={value.shelf ? value.shelf : "none"}
        onChange={(e) => changeShelf(e)}
      >
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
