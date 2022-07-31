import { useState } from 'react';
import './Register.css';
export default function Form() {
const [userID, setUserID] = useState('');

const handleuserID = (e) => {
	setUserID(e.target.value);
};
function submit(event){
    alert(`Registration successful for ${userID}`) 
}

return (
    <div className='reg'>
        <div className="container1" id='con'>
        <h1>Registration</h1>
        <form onSubmit={submit} id='form'>
            <div>
                <label>Name</label>
                <input className="input" type="text" required />
            </div>
            <div>
                <label>User ID</label>
                <input onChange={handleuserID} className="input"
                value={userID} type="text" required />
            </div>
            <div>
                <label>Email</label>
                <input className="input" type="email" required />
            </div>
            <div>
                <label>Date of Birth</label>
                <input className="input" type="date" />
            </div>
            <div>
                <label>Password</label>
                <input className="input" type="password" required />
            </div>
            <div>
                <label>Confirm Password</label>
                <input className="input" type="password" required />
            </div>
            <button type="submit" onClick={submit} id="register">Register</button>
        </form>
        </div>
    </div>
);
}
