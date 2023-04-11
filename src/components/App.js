import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

export default class App extends Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID apzmoSjXEORzIUOHgY1JscQlQs9wRPgp3NzymW65Pug",
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar handleSearchSubnit={this.onSearchSubmit} />
      </div>
    );
  }
}
