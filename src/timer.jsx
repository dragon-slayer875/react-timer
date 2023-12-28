import { useState } from "react";
import { useEffect } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);

    return (
        <div className="main-body">
            <div className="buttons">
                <button>Start</button>
                <button>Pause</button>
            </div>
            <div className="timer">{time}</div>
        </div>
    );
}
