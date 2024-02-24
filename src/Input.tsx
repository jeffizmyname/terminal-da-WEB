// Input.tsx
import React, { useEffect, useState } from "react";
import { changeTheme } from "./utils/themeChagne";

const Input: React.FC = () => {
    const [history, setHistory] = useState<JSX.Element[]>([]);
    const [keysBuffer, setKeysBuffer] = useState<string[]>([]);
    const [out, setOut] = useState<string>('');
    const [outLast, setOutLast] = useState<string>('');

    useEffect(() => {
        function checkAction() {
            const input = keysBuffer.join('');
            let newOutput = '';
            if (input === "help") {
                newOutput = "this is help";
            } else {
                newOutput = "no such command: " + input;
            }

            setOutLast(out);
            setOut(newOutput);

            const newElement = (
                <div key={history.length}>
                    <span className="text-prom1">guest</span>
                    <span className="text-frame">@</span>
                    <span className="text-prom2">terminal</span>
                    <span className="text-frame">:$ ~ </span>
                    <span>{input}</span><br />
                    <p><br /></p>
                    <span>{newOutput}</span>
                    <p><br /></p>
                </div>
            );

            setHistory(prevHistory => [...prevHistory, newElement]);
            setKeysBuffer([]);
        }

        const handleKeyPress = (event: KeyboardEvent) => {
            const pressedKey = event.key;
            if (pressedKey === 'Backspace') {
                setKeysBuffer(prevBuffer => prevBuffer.slice(0, -1));
            } else if (pressedKey === 'Enter') {
                checkAction();
            } else if (pressedKey.length === 1) {
                setKeysBuffer(prevBuffer => [...prevBuffer, pressedKey]);
            }
        };

        document.body.addEventListener('keydown', handleKeyPress);

        return () => {
            document.body.removeEventListener('keydown', handleKeyPress);
        };
    }, [keysBuffer, history, out, outLast]);

    return (
        <div className="test">
            {history}
            <div>
                <span className="text-prom1">guest</span>
                <span className="text-frame">@</span>
                <span className="text-prom2">terminal</span>
                <span className="text-frame">:$ ~ </span>
                <span>{keysBuffer.join('')}</span><br />
            </div>
        </div>
    );
};

export default Input;
