import React from "react";
import { useState } from "react";
export default function Square({chooseSquare,value}) {
    return (
    <span className="square" onClick={chooseSquare}>{value} </span>
    );
  }