import React from 'react';

function SignUpPage(props) {
    return (
        <>
            <div id="graySide">
            </div>
            <div id="redSide">
                <div id="signUpDiv1">
                    <p>CREATE ACCOUNT</p>
                </div>
                <div id="signUpDiv2">
                    <form>
                        <input type="text" id="signUpFirstName" name="signUpFirstName" placeholder='FIRST NAME'></input>
                        <input type="text" id="signUpLastName" name="signUpLastName" placeholder='LAST NAME'></input>
                        <input type="text" id="signUpEmail" name="signUpEmail" placeholder='EMAIL'></input>
                        <input type="text" id="signUpPassword" name="signUpPassword" placeholder='PASSWORD'></input>
                        <input type="submit" id="signUpSubmit" value="SIGN UP"></input>
                    </form>
                </div>
            </div>
        </>
    );
}
  
export default SignUpPage;