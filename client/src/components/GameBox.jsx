import React, { useEffect, useState } from 'react';
import Bird from './Bird';
import Pipe from './Pipe';
export default function GameBox({
    birdTop,
    jumpBird,
    pipeLeft,
    pipeHeghit,
    pipeWidth,
    bottom,
    score,
}) {
    const playMusic = () => {
        let player = document.getElementById('music');
        if (player.volume == 1) player.volume = 0;
        else player.volume = 1;
    };
    return (
        <div id="gameBox" onClick={jumpBird}>
            <Bird top={birdTop} />
            <span id="score">{score}</span>
            <Pipe
                top={0}
                width={pipeWidth}
                height={pipeHeghit}
                left={pipeLeft}
            ></Pipe>
            <Pipe
                top={500 - (pipeHeghit + bottom)}
                width={pipeWidth}
                height={bottom}
                left={pipeLeft}
            ></Pipe>
            <button onClick={playMusic} id="playMusic">
                {' '}
                🔊
            </button>
        </div>
    );
}
