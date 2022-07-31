import './Login.css';
export default function Login(){
    function submit(){
        alert(`Login Successful`) 
    }
    return(
        <div className='login'>
            <div className="container2">
            <h1>Login</h1>
            <form>
                <div>
                <label>userID</label>
                <input type='text' id="uid" name="uid" required></input>
                </div>
                <div>
                <label>Password</label>
                <input type='password' id="pwd" name="pwd" required></input>
                </div>
                <button type="submit" onClick={submit} id="login">Login</button>
            </form>
            </div>
        </div>
    );
}