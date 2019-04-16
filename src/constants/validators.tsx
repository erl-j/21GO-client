import * as validate from "validate.js";

const validators={
    signUp:{
        username: s=>validate.single(s,{presence:true,length:{minimum: 1, message:"must be at least 1 characters"}}),
		password: s=>validate.single(s,{presence:true,length:{minimum: 6, message:"must be at least 6 characters"}}),
		firstName: s=>validate.single(s,{presence:true,length:{minimum: 1, message:"must be at least 1 character"}}),
		lastName: s=>validate.single(s,{presence:true,length:{minimum: 1, message:"must be at least 1 character"}}),
		mail: s=>validate.single(s,{presence:true,email: true}),
		phone: s=>validate.single(s,{presence:true}),
		location: s=>validate.single(s,{presence:true,length:{minimum: 5, message:"must be at least 5 character"}}),
	}
	,
	superOrder:{
		storeName: s=>validate.single(s,{presence:true,length:{minimum: 1, message:"must be at least 1 character"}}),
		country:s=>validate.single(s,{presence:true,length:{minimum: 1, message:"must be at least 1 character"}}),
		storeUrl:s=>validate.single(s,{presence:true,length:{minimum: 1, message:"must be at least 1 character"}}),
		ArrivalLocation:s=>validate.single(s,{presence:true,length:{minimum: 1, message:"must be at least 1 character"}}),
		dispatchMode:s=>validate.single(s,{presence:true,length:{minimum: 1, message:"must be at least 1 character"}}),
		deadline:s=>validate.single(s,{presence:true,length:{minimum: 1, message:"must be at least 1 character"}}),
	}
}

export default validators;