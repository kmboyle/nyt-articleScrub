import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const saveButton = props => (
  <span className="save-btn" {...props}>
    Save Article
  </span>
);

export default saveButton;
