import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [beenSubmitted, setBeenSubmitted] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        if(!firstNameError, !lastNameError, !emailError, !passwordError, !confirmError)
        {
            const newUser = {
                firstName, lastName, email, password, confirm
            };
            setBeenSubmitted(true);
        }
    };

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    };

    const validateLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    };

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    };

    const validateConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value != password) {
            setConfirmError("Value does not match password");
        } else {
            setConfirmError("");
        }
    };

    return(
        <div className="container w-25">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label for="first_name">First Name:</label>
                    <input className="form-control" type="text" name="first_name" onChange={validateFirstName}></input>
                    {
                        firstNameError ? 
                        <small className="form-text text-danger">{firstNameError}</small> :
                        <small className="form-text text-danger">&nbsp;</small>
                    }
                </div>
                <div className="form-group">
                    <label for="last_name">Last Name:</label>
                    <input className="form-control" type="text" name="last_name" onChange={validateLastName}></input>
                    {
                        lastNameError ? 
                        <small className="form-text text-danger">{lastNameError}</small> :
                        <small className="form-text text-danger">&nbsp;</small>
                    }
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input className="form-control" type="text" name="email" onChange={validateEmail}></input>
                    {
                        emailError ? 
                        <small className="form-text text-danger">{emailError}</small> :
                        <small className="form-text text-danger">&nbsp;</small>
                    }
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
                    <input className="form-control" type="password" name="password" onChange={validatePassword}></input>
                    {
                        passwordError ? 
                        <small className="form-text text-danger">{passwordError}</small> :
                        <small className="form-text text-danger">&nbsp;</small>
                    }
                </div>
                <div className="form-group">
                    <label for="confirm">Confirm Password:</label>
                    <input className="form-control" type="password" name="confirm" onChange={validateConfirm}></input>
                    {
                        confirmError ? 
                        <small className="form-text text-danger">{confirmError}</small> :
                        <small className="form-text text-danger">&nbsp;</small>
                    }
                </div>
                {
                    !firstNameError && !lastNameError && !emailError && !passwordError && !confirmError ?
                        <input className="btn btn-primary mt-2" type="submit" value="Submit"/> : 
                        <input disabled className="btn btn-primary mt-2" type="submit" value="Submit"/>
                }
                
            </form>
            <hr></hr>
            <h5>User Form Data {beenSubmitted ? <span>Submitted</span> : <span>Unsubmitted</span>}</h5>
            <div className="container">
                <p>First Name: <span>{firstName}</span></p>
                <p>Last Name: <span>{lastName}</span></p>
                <p>Email: <span>{email}</span></p>
                <p>Password: <span>{password}</span></p>
                <p>Confirm Password: <span>{confirm}</span></p>
            </div>
        </div>
    );
};

export default UserForm;