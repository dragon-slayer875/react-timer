import { useState } from "react";
import { useEffect } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    function startTimer() {
        
    }

    function resetTimer() {
        clearInterval(startTimer);
        setTime(0);
    }

    function StartButton(time) {
        if (!time) {
            return <button onClick={startTimer}>Start</button>;
        } else {
            return <button onClick={resetTimer}>Reset</button>;
        }
    }

    function PauseButton(time) {
        if (!time) {
            return (
                <button className="pause-resume" disabled>
                    Pause
                </button>
            );
        } else {
            return <button className="pause-resume">Pause</button>;
        }
    }

    return (
        <>
            <div className="main-body">
                <div className="buttons">
                    <StartButton time={time} />
                    <PauseButton time={time} />
                </div>
                <div className="timer">
                    <p>{time}</p>
                </div>
            </div>
        </>
    );
}
