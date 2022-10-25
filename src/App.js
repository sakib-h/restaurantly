import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Containers/About";
import Home from "./Containers/Home";
import Menu from "./Containers/Menu";
import Specials from "./Containers/Specials";
import Events from "./Containers/Events";
import Chefs from "./Containers/Chefs";
import Gallery from "./Containers/Gallery";
import Contact from "./Containers/Contact";

function App() {
	return (
		<div className="App relative">
			<Navbar />
			<div className="heroBg" />
			<Home />
			<About />
			<Menu />
			<Specials />
			<Events />
			<Gallery />
			<Chefs />
			<Contact />
		</div>
	);
}

export default App;
