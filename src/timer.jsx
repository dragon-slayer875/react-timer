import { useState } from "react";
import { useRef } from "react";

function StartButton({ timerState, startTimer, resetTimer }) {
    if (timerState === "stopped") {
        return <button onClick={startTimer}>Start</button>;
    } else {
        return <button onClick={resetTimer}>Reset</button>;
    }
}

function PauseButton({ timerState, pauseTimer, resumeTimer }) {
    if (timerState === "stopped") {
        return <button disabled>Pause</button>;
    } else {
        if (timerState === "running")
            return <button onClick={pauseTimer}>Pause</button>;
        else return <button onClick={resumeTimer}>Resume</button>;
    }
}

function Timer() {
    const [time, setTime] = useState(0);
    const [timerState, setTimerState] = useState("stopped");
    const timer = useRef(null);

    function startTimer() {
        timer.current = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);
        setTimerState("running");
    }

    function resetTimer() {
        setTime(0);
        setTimerState("stopped");
        clearInterval(timer.current);
    }

    function pauseTimer() {
        setTime(time);
        setTimerState("paused");
        clearInterval(timer.current);
    }

    function resumeTimer() {
        setTimerState("running");
        startTimer();
    }

    return (
        <div className="main-body">
            <div className="buttons">
                <StartButton
                    timerState={timerState}
                    startTimer={startTimer}
                    resetTimer={resetTimer}
                />
                <PauseButton
                    timerState={timerState}
                    pauseTimer={pauseTimer}
                    resumeTimer={resumeTimer}
                />
            </div>
            <div className="timer">{time}</div>
        </div>
    );
}

export default Timer;
