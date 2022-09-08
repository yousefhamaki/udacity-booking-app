import React from "react";
import Item from "./Item";

const Shelf = ({ data, title, category, changeShelf }) => {
  const filter = data.filter((item) => item.shelf === category);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {filter.map((el) => (
            <Item changeShelf={changeShelf} key={el.id} value={el} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
