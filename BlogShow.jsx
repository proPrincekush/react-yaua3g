import React from "react";

function Blog(props) {
  return (
    <div>
      <h2>your blogs </h2>
      <h3>{props.username}</h3>
      
      <h2>{props.heading}</h2>
    
      <p>{props.comment}</p>
    </div>
  );
}
export default Blog;
