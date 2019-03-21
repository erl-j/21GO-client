import * as React from 'react';

const ValidatedInput = ({name, onChange}) => {
    const [validationMessage,setMessage]=React.useState("");

    const handleChange=(s)=>{
        onChange(s);
        const msg=validateName(s.target.value);
        setMessage(msg);
    }

	return (<React.Fragment key={name}>
    {name==="password" ? (
      <input name={name} type="password" placeholder={name} onChange={handleChange} />
    ) : (
      <input name={name} type="text" placeholder={name} onChange={handleChange}/>
    )}
		<span>{validationMessage}</span>
	</React.Fragment>)
}
export default ValidatedInput;

const validateName=(s:string)=>s.length>3?"":"name is too short"

// Pass validation function as prop
