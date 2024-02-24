import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Input";
import { changeTheme } from "./utils/themeChagne";

export default function App() {
  const [displayedString, setDisplayedString] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStringPrinted, setIsStringPrinted] = useState(false);
  const myString = `
    ___________               ____.       _____  _____  _____  .__              .__   
    \\__    ___/__________    |    | _____/ ____\\/ ____\\/     \\ |__| ____ _____  |  |  
      |    |_/ __ \\_  __ \\   |    |/ __ \\   __\\\\   __\\/  \\ /  \\|  |/    \\\\__  \\ |  |  
      |    |\\  ___/|  | \\/\\__|    \\  ___/|  |   |  | /    Y    \\  |   |  \\/ __ \\|  |__
      |____| \\___  >__|  \\________|\\___  >__|   |__| \\____|__  /__|___|  (____  /____/
                 \\/                    \\/                    \\/        \\/     \\/         v 0.0.1
                
                Welcome to the Terminal HEHE type help for some help thats logic :>

`;

  useEffect(() => {
    changeTheme('darkNight')
    if (!isStringPrinted && currentIndex < myString.length) {
      const timeout = setTimeout(() => {
        setDisplayedString(prevString => prevString + myString[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 1); 

      return () => clearTimeout(timeout);
    } else if (!isStringPrinted && currentIndex === myString.length) {
      setIsStringPrinted(true);
    }
  }, [currentIndex, myString, isStringPrinted]);
  return (
    <div className="bg-bg h-screen p-3 overflow-hidden">
      <div className="bg-bg text-text border-frame h-full border-[3px] flex flex-col rounded-lg">
        <div className="w-full h-200px bg-frame px-4 py-2 font-semibold text-xl">
          JeffOS
        </div>
        <div className="flex-1 px-8 py-7 pb-10 rounded-lg no-scrollbar  overflow-y-scroll">
          <div>
            <span className="text-prom1">guest</span>
            <span className="text-frame">@</span>
            <span className="text-prom2">terminal</span>
            <span className="text-frame">:$ ~ </span>
          </div>
          <pre className="text-splash">{displayedString}</pre>
          {isStringPrinted && <Input />}
        </div>
      </div>
    </div>
  );
}
