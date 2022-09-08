import React from "react";
import { Link } from "react-router-dom";
import Item from "../icons/components/Item";

const Search = ({ data, handlerSearch, search, changeShelf }) => {
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            {" "}
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={(e) => handlerSearch(e)}
              placeholder="Search by title, author, or ISBN"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Array.isArray(search)
              ? search.map((el) =>
                  data.filter((d) => d.id === el.id).length > 0 ? (
                    <Item
                      key={el.id}
                      changeShelf={changeShelf}
                      value={data.filter((d) => d.id === el.id)[0]}
                    />
                  ) : (
                    <Item key={el.id} changeShelf={changeShelf} value={el} />
                  )
                )
              : "No results found"}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Search;
