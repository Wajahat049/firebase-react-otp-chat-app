import React, { useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase"

const Login = () => {
    // Inputs
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');
    // const auth = getAuth();


    // Sent OTP
    const signin = () => {

        if (mynumber === "" || mynumber.length < 10) return;

        const appVerifier = new RecaptchaVerifier('recaptcha-container', {
            'callback': (response) => {
                console.log("prepared phone auth process");
            }
        }, auth);

        // let verify = new RecaptchaVerifier('recaptcha-container', {
        //     'size': 'normal',
        //     'callback': (response) => {
        signInWithPhoneNumber(auth, mynumber, appVerifier).then((result) => {
            setfinal(result);
            alert("code sent")
            setshow(true);
        })
            .catch((err) => {
                alert(err);
                console.log("ERROR", err)
                // window.location.reload()
            });
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        //     },
        //     'expired-callback': () => {
        //         // Response expired. Ask user to solve reCAPTCHA again.
        //         // ...
        //     }
        // }, auth);

    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            // success
        }).catch((err) => {
            alert("Wrong code");
        })
    }

    return (
        <div style={{ "marginTop": "200px" }}>
            <center>
                <div style={{ display: !show ? "block" : "none" }}>
                    <input className='otp' value={mynumber} onChange={(e) => {
                        setnumber(e.target.value)
                    }}
                        placeholder="phone number" />
                    <br /><br />
                    <div id="recaptcha-container">

                    </div>
                    <button className='send-otp' onClick={signin}>Send OTP</button>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                    <input className='otp' type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }}></input>
                    <br /><br />
                    <button className='send-otp' onClick={ValidateOtp}>Verify</button>
                </div>
            </center>
        </div>
    );
}

export default Login;
