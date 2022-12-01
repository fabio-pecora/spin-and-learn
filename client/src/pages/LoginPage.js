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
                        <input type="text" id="loginFirstName" name="loginFirstName" placeholder='FIRST NAME'></input>
                        <input type="text" id="loginLastName" name="loginLastName" placeholder='LAST NAME'></input>
                        <input type="text" id="loginEmail" name="loginEmail" placeholder='EMAIL'></input>
                        <input type="text" id="loginPassword" name="loginPassword" placeholder='PASSWORD'></input>
                        <button id="resetPass">[Reset Password]</button>
                        <button id="loginSubmit">SIGN IN</button>
                    </form>
                </div>
            </div>
        </>
    );
}
  
export default LoginPage;