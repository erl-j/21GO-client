import * as React from "react";

const ValidatedInput = ({name, onBlur, validationMessage}) => {


	return (<React.Fragment key={name}>
                <input name={name} type={name === "password" ? "password" : "text"}
                       placeholder={name} onBlur={onBlur}/>
                <br/>
                <span>{validationMessage}</span>
	        </React.Fragment>);

};

export default ValidatedInput;
