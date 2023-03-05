import { useRef } from "react";

export default function Counter() {
    const ref = useRef(0);

    function handleClick() {
        ref.current += 1;
        console.log(`You clicked ${ref.current} times.`);
    }

    return <button onClick={handleClick}>Click.</button>;
}
