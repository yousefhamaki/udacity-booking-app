import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search";
import React, { useState, useEffect } from "react";
import * as Api from "./BooksAPI";

const App = () => {
  const [searchResult, setResult] = useState([]);
  const [searchText, setText] = useState("");
  const [books, setBooks] = useState([]);

  const changeShelf = async (book, shelf) => {
    await Api.update(book, shelf);
    await Api.getAll().then((res) => {
      setBooks(res);
    });
  };

  const getResult = (search) => {
    Api.search(search, 15).then((res) => {
      if (res) {
        setResult(res);
      } else {
        setResult("no results found");
      }
    });
  };

  const handlerSearch = (e) => {
    setText(e.target.value);
    getResult(searchText);
  };

  useEffect(() => {
    Api.getAll().then((res) => {
      setBooks(res);
    });
  });

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home data={books} changeShelf={changeShelf} />}
          />
          <Route
            path="/search"
            element={
              <Search
                changeShelf={changeShelf}
                handlerSearch={handlerSearch}
                search={searchResult}
                data={books}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
