import { useState } from "react";
import '../Styles/TaskTwoLevelTwo.css';

function TaskTwoLevelTwo() {
    const [result, setResult] = useState('1+1');

    const updateResult = () => {
        isNumber();
    };
    
    function isNumber() {
        if(eval(result).isInteger) {
            setResult(eval(result));
        }
        else{
            setResult('НЕВЕРНОЕ ВЫРАЖЕНИЕ')
        }
    }

    return(
        <div>
            <div className='inputs2'>
                <label>
                    <input type="text" value={result} onChange={updateResult}/>
                    <h2>= {setResult}</h2>                    
                </label>
            </div>
        </div>

    )
}

export default TaskTwoLevelTwo;