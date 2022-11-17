import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchDataWithHooks() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const getTodos = async () => {
			const promise = axios.get("https://jsonplaceholder.typicode.com/posts");
			const response = await promise;
			setTodos(response.data)
		};
		getTodos();
	}, []);

	return <div className="mt-5">
        <h1>FetchDataWithHooks</h1>
        <ul>
            {todos.map(item => <li key={item.id}>
                {item.title}
            </li>)}
        </ul>
    </div>;
}
