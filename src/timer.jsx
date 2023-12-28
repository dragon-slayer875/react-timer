import { useState } from "react";
import { useEffect } from "react";

function StartButton({ time, startTimer, resetTimer }) {
    if (time === 0) {
        return <button onClick={startTimer}>Start</button>;
    }
    else {
        return <button onClick={resetTimer}>Reset</button>
    }
}

function PauseButton({ time, pauseTimer }) {
    if (time === 0) {
        return <button disabled>Pause</button>;
    }
    else {
        return <button onClick={pauseTimer}>Pause</button>;
    }
}

function Timer() {
    const [time, setTime] = useState(0);

    return (
        <div className="main-body">
            <div className="buttons">
                <StartButton time={time} startTimer={() => {}} resetTimer={() => {}} />
                <PauseButton time={time} pauseTimer={() => {}} />
            </div>
            <div className="timer">{time}</div>
        </div>
    );
}

export default Timer;