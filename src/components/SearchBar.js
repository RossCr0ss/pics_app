import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearchSubnit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input value={this.state.term} type="text" onChange={(event) => this.setState({ term: event.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}
