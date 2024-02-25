import React, { useEffect, useState } from "react";
import Help from "./responses/Help";
import Kitten from "./responses/Kitten";
import Theme from "./responses/Theme";
import Media from "./responses/Media";

const Input: React.FC = () => {
    const [history, setHistory] = useState<JSX.Element[]>([]);
    const [keysBuffer, setKeysBuffer] = useState<string[]>([]);
    const [out, setOut] = useState<JSX.Element>();

    useEffect(() => {

        async function checkAction() {
            const input = keysBuffer.join('');
            const inputArray = input.split(' ')
            let newOutput;
            if (inputArray[0] === "help") {
                newOutput = <Help/>
            } else if(inputArray[0] === "media") {
                newOutput = <Media/>
            } else if(inputArray[0] === "theme" || inputArray[0] === "themes") {
                newOutput = <Theme theme={inputArray.length  > 1 ? inputArray[1] : ""}/>
            } else if(inputArray[0] === "kitten") {
                newOutput = <Kitten/>
            } else {
                if(input.length !== 0) {
                    newOutput = (<div>no such command: {input}</div>);
                }
                
            }

            setOut(newOutput);

            const newElement = (
                <div key={history.length}>
                    <span className="text-prom1">guest</span>
                    <span className="text-frame">@</span>
                    <span className="text-prom2">terminal</span>
                    <span className="text-frame">:$ ~ </span>
                    <span>{input}</span><br />
                    {input.length !== 0 ? <p><br /></p> : ""}
                    <span>{newOutput}</span>
                    {input.length !== 0 ? <p><br /></p> : ""}
                </div>
            );

            setHistory(prevHistory => [...prevHistory, newElement]);
            setKeysBuffer([]);
        }

        const handleKeyPress = (event: KeyboardEvent) => {
            const pressedKey = event.key;
            if (pressedKey === 'Backspace') {
                setKeysBuffer(prevBuffer => prevBuffer.slice(0, -1));
            } else if(pressedKey == 'Escape') {
                setKeysBuffer([]);
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
    }, [keysBuffer, history, out]);

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
