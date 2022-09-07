import React from "react";
import Content from "../icons/components/Content";
import Header from "../icons/components/Header";
import SearchButton from "../icons/components/SearchButton";

const Home = ({ data, changeShelf }) => {
  return (
    <div>
      <div className="list-books">
        <Header />
        <Content data={data} changeShelf={changeShelf} />
        <SearchButton />
      </div>
    </div>
  );
};

export default Home;
