import react from 'react';
import { useState } from 'react';
import Board from './Board';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import FlappyBird from './FlappyBird';
import OffBoard from './offBoard';
import { useLocation } from 'react-router-dom';
import '../assets/styles/game.css'

export default function Game({ socket, user, room }) {
    if (!sessionStorage['userName'])
        window.location.href = 'http://localhost:3000/login';
    const location = useLocation();
    const data = location.state;
    const [result, setResult] = useState({
        winner: 'none',
        state: 'none',
        player: 'none',
    });
    const resetGame = () => {
        setResult({
            winner: 'none',
            state: 'none',
            player1: 'none',
            player2: 'none',
        });
    };
    const { width, height } = useWindowSize();
    return (
        <div className='game-container'>
            <div className="Game">
                {data == 'onePlayer' ? (
                    <OffBoard />
                ) : (
                    <Board
                        socket={socket}
                        user={user}
                        room={room}
                        result={result}
                        setResult={setResult}
                    />
                )}
                {/* <Board
            socket={socket}
            user={user}
            room={room}
            result={result}
            setResult={setResult}
          /> */}
                {result.state === 'won' && (
                    <div> {result.winner} Won The Game</div>
                )}
                {result.state === 'won' ? (
                    <Confetti width={width} height={height} />
                ) : null}
                {result.state === 'tie' && <div> Game Tieds</div>}
            </div>
            {/* <FlappyBird /> */}
            <div id="songs">
                <audio id="music" loop autoPlay>
                    <source src="https://ytpp3.com/dl2/L3kDv8QbyiDq05HKtSrKT23yOQGxMp3qyuoWhLzhG6TTaF5APeTEa7yXs9bB90g-Vwuvt_5A20PilKtp90paB9A8er2VNVKbGfKBRPQ-13QtV1TYLmaDrJkywFzZjJ_Qnvu6IA5E_jyQUw7-teEOUzQVeO5YGAQCGD8ASPTyUv7C8G-mJzijuaSGVS2RSCOcVfVn9deDpY0Bh0tjgoGTyo-xh6Pe6SgumWXqT7jK6kjFl_du3GatlWTgqOAr42zHpwNJKAAePmanVSp9FYm-3ZQf2jXnR5BzvuwiNyVVrb9MXPD5MArNpDOkyNAXzoEpkZ_QnIR02U-_atqJ9OdMJi_hrmUzSFJnLzZKqxtweQc2zhqFJrIOvSWFZSiedPjJ8XDw2jEOSzokZFxGnpdr_EIQTtgfxcCO7dnPo1e4GkMtRqFi_LHYzev1Sv794mW6CzsMoQNOnt2WhNXAkTPAaq777QDW1vkWlHwuQ4BlBCkZbNVDbyaUAZyhswGv0iMNwnamyIzTpb7WD-241DgrxtO-l7fTypDMK9aL-i2r8sXtAFWMYP0QegcBHGrC8Dvkyq8AKclLQInGiEQUnSoNWYSrZxVwICphe6g4vDKDeW4XjVXXPnFVfsgD3LNvy6hn_95AsXl1_aHDWVyvr1V25SIQWFwWc1sLj_kuLC8CYjHjTsaJSjEaeiOb849ruZwwx2WrMtWG-7slOjZG_O0O3GjaK9u2l24btIP3kWWQZB48Rx84nODmxkmPwfRmvP4rSfkhXR9_lSKXXemEGSIZ95TYAPehXfAZJAtiFb6VJsaNjcioLcf6MfvliJnaggBASUkpCbIM8AzuYbpk6INuZfo7Jrj3BYFFZdpq7_Fytx2S6U14DKhclUR4_aGhKncioiOl0KESzBsOFq_qEZsoMj9v7v6p3GYy9pAZKlsolDDnMoWSl4Y1eY_cAnkuYPDXOad3mGQJjiveG4NKIvIS2bhE0V4D_VfTDWyNQNSOhpr1zaiCFZDtugX1cp4cYiQOWIFLSbLmksueL1KSVw0sEN9fodDOk64Tsys-0ibLylma0RUKYOZA0Tqq4VYXPVEVUe7nNCgiq-YQ_nMopxsCnacHYVFaYgNUuPwI14ltFTGqrmRMtiYPow5YV8ZVmyXg4nptwU5SmflFLwqsKd3aENlFhAxk7jerUA-jGZ3BF5ngA3Cin64UJCvwoDSC-NKkEw9w5CJgrgO0DNAZk9rbad-KCTzPlM9DPE1N5ZxIYpiD3rFBZVMGTLFCevXlgCXRQUs6NSRSQS8LUsnjhKSOywu954bN73EaScUsUq0CtJRbIt_vqf1r3wV8r8WrZvrCQxLDUGHUfGCmVmmTo_HG6KpjfzJvwvmeEmWH47CV2Y9-LNxB1Ysw6P0/1sEZVEZ6" />
                </audio>
            </div>
        </div>
    );
}
