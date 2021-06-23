import React, { useContext } from "react";
import UserContext from "./userContext";

function Login(props) {
    const currentUser = useContext(UserContext);

    return (
        <div>
            <button onClick={() => currentUser.onLoggedin({ username: 'Mike'})}>Login</button>
        </div>
    );
}

export default Login;