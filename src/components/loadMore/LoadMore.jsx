import React from "react";

export const LoadMore = ({ handleLoadMore }) => {
  return (
    <button type="button" onClick={handleLoadMore}>
      Load more
    </button>
  );
};
