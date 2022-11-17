import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counterComponents";
import MoviesIndex from "./components/moviesIndex";

function App() {
	return (
		<main className="container">
            <MoviesIndex></MoviesIndex>
        </main>
	);
}

export default App;
