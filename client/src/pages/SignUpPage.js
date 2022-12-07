import React, {useState} from 'react'



const SignUpPage = (props) => {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const onSubmit = (event) => {
        console.log("EVENT", event.target)
        event.preventDefault()
    
        fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                content: {
                    FirstName, 
                    LastName, 
                    Email, 
                    Password
                }
            })
        })
        .then((response) => response.json()).then((res) => {
            console.log(res)
        })
        .catch((error) => console.error('Error:', error))
    }

    const handleOnchnage = (e) => {
        switch (e.target.id) {
            case "FirstName":
                setFirstName(e.target.value)
                break;
            case "LastName":
                setLastName(e.target.value)
                break;
            case "Email":
                setEmail(e.target.value)
                break;
            default:
                setPassword(e.target.value)
                break;
        }
    }

    return (
        <div className='SignUpPage container'>
            <div className="redSide">
                <div id="signUpDiv1">
                   <h1>Create Account</h1>
               </div>
               <form onSubmit={onSubmit}>
                   <input onChange={handleOnchnage} type="text" id="FirstName" name="signUpFirstName" placeholder='First Name'/>
                   <input onChange={handleOnchnage} type="text" id="LastName" name="signUpLastName" placeholder='Last Name'/>
                   <input onChange={handleOnchnage} type="text" id="Email" name="signUpEmail" placeholder='Email'/>
                   <input onChange={handleOnchnage} type="text" id="Password" name="signUpPassword" placeholder='Password'/>
                   <button>Sign Up</button>
                </form>
            </div>
        </div>
    );
}
  
export default SignUpPage;