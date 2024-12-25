import "./styles.css";
import { useEffect, useRef, useState } from "react";

let typedString =
  "This is an automated typing by the user to gnjn fsjonfs vfnvjnfdv vfdvdfijv vfvdfnvfd vfjnvjfnvv vfmvjfmnvjv. grnjng gnrjgnmetjkn. gngjvnjgnjkng grngjengjonjnm";

export default function App() {
  const [value, setValue] = useState("");
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      let currStrLength = value?.length || 0;
      console.log(currStrLength, value);
      let copyValue = typedString.slice(0, currStrLength + 1);
      setValue(copyValue);
    }, 200);

    return () => clearInterval(timerRef.current);
  }, [value]);

  return (
    <div className="App">
      <div className="input">
        {value}
        <span className="blinking"></span>
      </div>
    </div>
  );
}
