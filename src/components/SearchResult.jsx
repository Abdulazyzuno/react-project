import React from "react";

function SearchResults({ query }) {
  const items = [];
  if (query) {
    for (let i = 0; i < 4; i++) {
      items.push(
        <li key={i}>
          Result for {query} - {i}
        </li>
      );
    }
  }
  return <ul>{items}</ul>;
}

export default SearchResults;
