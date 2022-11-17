import React from "react";
import Alert from "./components/alert";

const NotFound = () => {
	return (
		<div className="m-3">
            <Alert txtProp={"oops...something went wrong!"} classes={"warning"}></Alert>
        </div>
	);
};

export default NotFound;
