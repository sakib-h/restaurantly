import LobsterBisque from "../Assets/Images/menu/lobster-bisque.jpg";
import BreadBarrel from "../Assets/Images/menu/bread-barrel.jpg";
import CrabCake from "../Assets/Images/menu/cake.jpg";
import CaesarSelections from "../Assets/Images/menu/caesar.jpg";
import TuscanGrilled from "../Assets/Images/menu/tuscan-grilled.jpg";
import MozzarellaStick from "../Assets/Images/menu/mozzarella.jpg";
import GreekSalad from "../Assets/Images/menu/greek-salad.jpg";
import SpinachSalad from "../Assets/Images/menu/spinach-salad.jpg";
import LobsterRoll from "../Assets/Images/menu/lobster-roll.jpg";

export const menuItems = [
	{
		id: "01",
		title: "Lobster Bisque",
		price: "$5.95",
		ingredient: " Lorem, deren, trataro, filede, nerada",
		img: LobsterBisque,
		category: "starters",
	},

	{
		id: "02",
		title: "Bread Barrel",
		price: "$6.95",
		ingredient: "Lorem, deren, trataro, filede, nerada",
		img: BreadBarrel,
		category: "specialty",
	},

	{
		id: "03",
		title: "Crab Cake",
		price: "$7.95",
		ingredient:
			" A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
		img: CrabCake,
		category: "starters",
	},

	{
		id: "04",
		title: "Caesar Selections",
		price: "$8.95",
		ingredient: " Lorem, deren, trataro, filede, nerada",
		img: CaesarSelections,
		category: "salads",
	},

	{
		id: "05",
		title: "Tuscan Grilled",
		price: "$9.95",
		ingredient:
			" Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
		img: TuscanGrilled,
		category: "specialty",
	},

	{
		id: "06",
		title: "Mozzarella Stick",
		price: "$4.95",
		ingredient: " Lorem, deren, trataro, filede, nerada",
		img: MozzarellaStick,
		category: "starters",
	},

	{
		id: "08",
		title: "Greek Salad",
		price: "$9.95",
		ingredient: " Fresh spinach, crisp romaine, tomatoes, and Greek olives",
		img: GreekSalad,
		category: "salads",
	},

	{
		id: "09",
		title: "Spinach Salad",
		price: "$9.95",
		ingredient:
			" Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
		img: SpinachSalad,
		category: "salads",
	},

	{
		id: "10",
		title: "Lobster Roll",
		price: "$12.95",
		ingredient:
			"Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
		img: LobsterRoll,
		category: "specialty",
	},
];
