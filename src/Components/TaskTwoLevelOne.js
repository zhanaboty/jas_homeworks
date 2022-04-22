import { useState } from "react";
import '../Styles/TaskTwoLevelOne.css'

function TaskTwoLevelOne() {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [result, setResult] = useState('');
    const[symbol, setSymbol] = useState('');
    
    const updateFirst = (event) => {
        setFirst(event.target.value);
    };
    const updateSecond = (event) => {
        setSecond(event.target.value);
    };

    function plus() {
        setResult((+first) + (+second));
        setSymbol("+");
    }
    function minus() {
        setResult((+first) - (+second));
        setSymbol("-");
    }
    function multiply() {
        setResult((+first) * (+second));
        setSymbol("*");
    }
    function divide() {
        setResult((+first) / (+second));
        setSymbol("/");
    }

    const updateResult = () => {
        if(onclick(plus)) {
            plus();
        }
        if(onclick(minus)) {
            minus();
        }
        if(onclick(multiply)) {
            multiply();
        }
        else{
            divide();
        }
    };

    return(
        <div>
            <div className='inputs'>
                <p>A:</p>
                <input type="text" value={first} onChange={updateFirst}/>
            </div>
            <div className='inputs'>
                <p>B:</p>
                <input type="text" value={second} onChange={updateSecond}/>
            </div>
            <div className='buttons'>
                <button onClick={plus} onChange={updateResult}>+</button>
                <button onClick={minus} onChange={updateResult}>-</button>
                <button onClick={multiply} onChange={updateResult}>*</button>
                <button onClick={divide} onChange={updateResult}>/</button>
            </div>
            <div className='result'>
                <h1>Ответ: {first} {symbol} {second} = {result}</h1>
            </div>
        </div>
    )
}

export default TaskTwoLevelOne;
