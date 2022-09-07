import React from "react";
import Shelf from "./Shelf";

const Content = ({ data, changeShelf }) => {
  return (
    <div className="list-books-content">
      <div>
        <Shelf
          data={data}
          changeShelf={changeShelf}
          title="Currently Reading"
          category="currentlyReading"
        />
        <Shelf
          data={data}
          changeShelf={changeShelf}
          title="Want to Read"
          category="wantToRead"
        />
        <Shelf
          data={data}
          changeShelf={changeShelf}
          title="Read"
          category="read"
        />
      </div>
    </div>
  );
};

export default Content;
