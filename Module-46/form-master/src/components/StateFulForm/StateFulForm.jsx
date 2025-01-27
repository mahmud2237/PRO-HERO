import { useState } from "react";

const StateFulForm = () => {
    const [name, setName] = useState('Rojoni Active'); // or, useState(null)
    const [email, setEmail] = useState(''); // or, useState(null)
    const [password, setPassword] = useState(''); // or, useState(null)
    const [error, setError] = useState(''); // or, useState(null)

    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        // send form setEmail data to server
        if(password.length < 6){
            setError('Password should be at least 6 characters longer');
            console.log('Password should be at least 6 characters longer');
            return;
        }else{
            setError('');
            console.log(name, email, password);
        }
    }

    return (
        <div className="mb-5">
            <form onClick={handleSubmit}>
                <input onChange={handleNameChange} value={name} type="text" name="name"/>
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id=""/>
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required/>
                <br />
                <input type="submit" value='StateFulForm Submit' />
                {
                    error && <p style={{color: 'red'}}>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFulForm;