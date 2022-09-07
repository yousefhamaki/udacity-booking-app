import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search";
import React from "react";
import * as Api from "./BooksAPI";

class App extends React.Component {
  state = {
    books: [],
    searchText: "",
    searchResult: [],
  };

  componentDidMount() {
    Api.getAll().then((res) => {
      this.setState({ books: res });
    });
  }

  changeShelf = async (book, shelf) => {
    await Api.update(book, shelf);
    await Api.getAll().then((res) => {
      this.setState({ books: res });
    });
  };

  handlerSearch = (e) => {
    this.setState({ searchText: e.target.value });
    this.getResult(this.state.searchText);
  };

  getResult = (search) => {
    Api.search(search, 15).then((res) => {
      if (res) {
        this.setState({ searchResult: res });
      } else {
        this.setState({ searchResult: "no results found" });
      }
    });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home data={this.state.books} changeShelf={this.changeShelf} />
              }
            />
            <Route
              path="/search"
              element={
                <Search
                  changeShelf={this.changeShelf}
                  handlerSearch={this.handlerSearch}
                  search={this.state.searchResult}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
