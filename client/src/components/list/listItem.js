import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    <button style={{'float': 'right'}} onClick={props.onClick}>Save Article</button>
          <h3>{props.headline}</h3>
          <p>{props.story}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>View Article</a>
  </li>
);
