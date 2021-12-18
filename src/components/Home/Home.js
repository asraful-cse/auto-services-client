import React from "react";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import HeaderSlider from "./HeaderMain/HeaderSlider/HeaderSlider";
import HomeBlog from "./HomeBlog/HomeBlog";
import HomeReview from "./HomeReview/HomeReview";

const Home = () => {
	return (
		<div>
			<HeaderSlider></HeaderSlider>
			<Services></Services>
			<HomeReview />
			<HomeBlog />
			<Footer></Footer>
		</div>
	);
};

export default Home;
