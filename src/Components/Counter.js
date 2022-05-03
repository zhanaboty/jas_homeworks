import { useRef, useState } from "react";
import '../Styles/index.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function Counter() {
  const [counter, setCounter] = useState(0);
  const interval = useRef();

  const startCounter = () => {
    clearInterval(interval.current);
    setCounter(counter + 1);
    interval.current = setInterval(() => {
      setCounter((currentCounter) => currentCounter + 1);
    }, 1000);
  };

  const stopCounter = () => {
    clearInterval(interval.current);
  };

  return (
    <div className="counter">
        <Stack direction="row" spacing={3}>
        <Button onClick={startCounter} variant="contained" color="secondary">start</Button>
        <Button onClick={stopCounter} variant="contained">stop</Button>
        </Stack>
        <div>{counter}</div>
    </div>
  );
}

export default Counter;