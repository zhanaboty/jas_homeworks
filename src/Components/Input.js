import { useState } from "react";

function Input() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [fullname, setFullname] = useState('');

    const updateName = (event) => {
      setName(event.target.value);
    };
   
    const updateSurname = (event) => {
    setSurname(event.target.value);
    };
   
    const updateFullname = (event) => {
        setFullname(event.target.value);
    };


    return(
        <div>
            <h1>{name} {surname} {fullname}</h1>
        
        <label>
            <input type="text" value={name} onChange={updateName}/>
            <input type="text" value={surname} onChange={updateSurname}/>
            <input type="text" value={fullname} onChange={updateFullname}/>
        </label>
        </div>

    )
}

export default Input;
