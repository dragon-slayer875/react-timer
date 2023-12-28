import { useState } from "react";
import { useEffect } from "react";

function StartButton({ time, startTimer, resetTimer }) {
    if (time === 0) {
        return <button onClick={startTimer}>Start</button>;
    } else {
        return <button onClick={resetTimer}>Reset</button>;
    }
}

function PauseButton({ time, pauseTimer }) {
    if (time === 0) {
        return <button disabled>Pause</button>;
    } else {
        return <button onClick={pauseTimer}>Pause</button>;
    }
}

function Timer() {
    const [time, setTime] = useState(0);

    function startTimer() {
        setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);
    }

    function resetTimer() {
        setTime(0);
        clearInterval();
    }

    function pauseTimer() {
        setTime(time);
        clearInterval();
    }

    return (
        <div className="main-body">
            <div className="buttons">
                <StartButton
                    time={time}
                    startTimer={startTimer}
                    resetTimer={ resetTimer}
                />
                <PauseButton time={time} pauseTimer={ pauseTimer } />
            </div>
            <div className="timer">{time}</div>
        </div>
    );
}

export default Timer;
