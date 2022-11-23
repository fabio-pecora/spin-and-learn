import React from 'react';

function LoginPage(props) {
    return (
        <>
            <div id="graySide">
            </div>
            <div id="redSide">
                <div id="loginDiv1">
                    <p>LOGIN</p>
                </div>
                <div id="loginDiv2">
                    <form>
                        <input type="text" id="loginEmail" name="loginEmail" placeholder='EMAIL'></input>
                        <input type="text" id="loginPassword" name="loginPassword" placeholder='PASSWORD'></input>
                        <button id="resetPass">[Reset Password]</button>
                        <input type="submit" id="loginSubmit" value="SIGN IN"></input>
                    </form>
                </div>
            </div>
        </>
    );
}
  
export default LoginPage;