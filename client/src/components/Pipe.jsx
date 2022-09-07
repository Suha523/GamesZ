import React, { useEffect, useState } from 'react';
export default function Pipe({ top, width, height, left }) {
    return (
        <div
            className={`pipe ${top == 0 ? 'down' : 'top'}`}
            style={{
                top: `${top}px`,
                width: `${width}px`,
                height: `${height}px`,
                left: `${left}px`,
            }}
        />
    );
}
