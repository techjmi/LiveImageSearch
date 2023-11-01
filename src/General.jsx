import React from "react";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

export default function General() {
  // Use the useParams hook to access route parameters
  const { name } = useParams();
  // Use the useLocation hook to access the location object
  const location = useLocation();
  console.log(location); // Logging the location to check
  // Use the useHistory hook to access the history object
  // const history = useHistory();
  console.log(history); // Logging the history to check

  return (
    <div>
      <h1>This Tab will cover some important hooks....</h1>
      <h1>This is contact of {name}</h1>
      <p>My current location is {location.pathname}</p>
    </div>
  );
}
