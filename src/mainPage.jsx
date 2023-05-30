import React from 'react';
import { auth } from "./firebase"
import ChatBox from './chatBox';


const Mainpage = () => {

    const logout = () => {
        auth.signOut();
    }

    return (
        <>
            <nav style={{ backgroundColor: "#764ABC", display: "flex", flexDirection: "row", padding: "1%", justifyContent: "space-between", position: "sticky", top: 0 }}>
                <h2 style={{ color: "white", margin: "0px", padding: "1%" }}>React Chat App</h2>
                <button style={{ height: "20%", marginTop: "1%" }} onClick={logout} type="button">
                    Logout
                </button>
            </nav>
            <ChatBox />
        </>
        // <div style={{ marginTop: 250 }}>
        //     <center>
        //         <h3>Welcome {auth.currentUser.phoneNumber}</h3>
        //         <button style={{ "marginLeft": "20px" }}
        //             onClick={logout}>Logout</button>
        //     </center>
        // </div>
    );
}

export default Mainpage;
