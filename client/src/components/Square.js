import React from "react";
export default function Square(props) {
    return (
      <div className="square_container" onClick={props.chooseSquare}>
      {props.x ? 'x' : props.o ? 'o' : ''}
   </div>
    );
  }