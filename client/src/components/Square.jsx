import React from 'react';
import { useState } from 'react';
import '../assets/styles/square.css';
export default function Square({ chooseSquare, value }) {
    return (
        <span className="square" onClick={chooseSquare}>
            <p>{value}</p>{' '}
        </span>
    );
}
