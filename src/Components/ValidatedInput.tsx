import * as React from 'react';

const ValidatedInput = ({name, onChange, validator}) => {
    const [validationMessage,setMessage]=React.useState("");

    const handleChange=(s)=>{
        onChange(s);
        const msg=validator(s.target.value);
        setMessage(msg);
    }

	return (<React.Fragment key={name}>
    {name==="password" ? (
      <input name={name} type="password" placeholder={name} onChange={handleChange} />
    ) : (
      <input name={name} type="text" placeholder={name} onChange={handleChange}/>
    )}
    <br/>
		<span>{validationMessage}</span>
	</React.Fragment>)
}
export default ValidatedInput;
