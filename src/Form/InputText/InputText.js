import React from 'react';

const InputText = (props)=>
<input 
    type="text" 
    value={props.textValue}
    onChange={props.handleChange}
    name={props.name}
/>;

export default InputText;
