
import React from "react";

export const Saved = props => (
  <li className="list-group-item">
    <button style={{'float': 'right'}} onClick={props.onClick}>Remove Article</button>
          <h3>{props.headline}</h3>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>View Article</a>
          
  </li>
);
