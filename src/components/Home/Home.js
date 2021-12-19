import React from "react";
import Footer from "../Footer/Footer";
import Contact from "../From/Contact/Contact";
import Services from "../Services/Services";
import Blog from "./Blog/Blog";
import HeaderSlider from "./HeaderMain/HeaderSlider/HeaderSlider";
import HomeReview from "./HomeReview/HomeReview";

const Home = () => {
	return (
		<div>
			<HeaderSlider></HeaderSlider>
			<Blog></Blog>
			<Services></Services>
			<HomeReview />
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
};

export default Home;
