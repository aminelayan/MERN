import React, { useState } from  'react';
    
    
const UserForm = (props) => {
const [firstName, setFirstName] = useState("");
const [FirstNameError, setFirstNameError] = useState("");
const [lastName, setLastName] = useState("");
const [LastNameError, setLastNameError] = useState("");
const [email, setEmail] = useState("");
const [EmailError, setEmailError] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfrimPassword] = useState("");
const [passwordError, setPasswordError] = useState("");
const [confirmPasswordError, setConfrimPasswordError] = useState("");

    const handleFirstName = (e) =>{
    setFirstName(e.target.value)
    if (e.target.value.length<2){
    setFirstNameError("First Name Must Be At Least 2 Characters");
    }
    else{
    setFirstNameError("")
    }}

    const handleLasttName = (e) =>{
        setLastName(e.target.value)
        if (e.target.value.length<2){
        setLastNameError("Last Name Must Be At Least 2 Characters");
        }
        else{
        setLastNameError("")
        }}
    
        const handleEmail = (e) =>{
            setEmail(e.target.value)
            if (e.target.value.length<2){
            setEmailError("Email Must Be At Least 2 Characters");
            }
            else{
            setEmailError("")
            }}

            const handlePassword = (e) =>{
                setPassword(e.target.value)
                if (e.target.value.length<8){
                setPasswordError("Password Must Be 8 Characters");
                }
                else{
                setPasswordError("")
                }}

            const handleconfirmPassword = (e)=>{
                setConfrimPassword(e.target.value);
                if(password !== e.target.value){
                    setConfrimPasswordError("The Password Must Match ")
                }
                else{
                    setConfrimPasswordError("")
                }
                }
            
return(
    <>

    <div>
    <form onSubmit={ (e) => e.preventDefault() }>
<div>
<label>First Name: </label> 
<input type="text" onChange={handleFirstName}/>
{
FirstNameError ?
<p style={{color:'red'}}>{ FirstNameError }</p> :
''
}
</div>
<div>
<label>Last Name: </label> 
<input type="text" onChange={handleLasttName} />
{
LastNameError ?
<p style={{color:'red'}}>{ LastNameError }</p> :
''
}
</div>
<div>
<label>Email Address: </label> 
<input type="text" onChange={handleEmail}/>
{
EmailError ?
<p style={{color:'red'}}>{ EmailError }</p> :
''
}
</div>
<div>
<label>Password: </label>
<input type="password" onChange={ handlePassword }  />
{
passwordError ?
<p style={{color:'red'}}>{ passwordError }</p> :
''
}
</div>
<div>
<label>Confirm Password: </label>
<input type="password" onChange={ handleconfirmPassword }  />
{
confirmPasswordError ?
<p style={{color:'red'}}>{ confirmPasswordError }</p> :
''
}
</div>
</form>
</div>

<div>
    <h2>Your Form Data</h2>
<p>First Name :{firstName}</p>
<p>Last Name :{lastName}</p>
<p>Email: {email}</p>
<p>Password: {password}</p>
<p>{confirmPassword}</p>

</div>
</>
);
};
    
export default UserForm;
