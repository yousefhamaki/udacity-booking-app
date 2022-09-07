import React from "react";
import ShelfChanger from "./ShelfChanger";

const Item = ({ value, title, author, img, changeShelf }) => {
  const update = (e) => {
    console.log(e.target.value);
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
              backgroundImage: `url(${img})`,
            }}
          ></div>
          <ShelfChanger changeShelf={update} value={value} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>
  );
};

export default Item;
