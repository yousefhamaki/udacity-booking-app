import React from "react";
import ShelfChanger from "./ShelfChanger";

const Item = ({ value, changeShelf }) => {
  const update = (e) => {
    changeShelf(value, e.target.value);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                value.imageLinks ? value.imageLinks.smallThumbnail : ""
              })`,
            }}
          ></div>
          <ShelfChanger changeShelf={update} value={value} />
        </div>
        <div className="book-title">{value.title}</div>
        <div className="book-authors">
          {value.authors ? value.authors[0] : ""}
        </div>
      </div>
    </li>
  );
};

export default Item;
