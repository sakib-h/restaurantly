import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Containers/About";
import Home from "./Containers/Home";
import Menu from "./Containers/Menu";

function App() {
	return (
		<div className="App relative">
			<Navbar />
			<div className="heroBg" />
			<Home />
			<About />
			<Menu />
		</div>
	);
}

export default App;
