import {
  Announcement,
  Catergories,
  Footer,
  Navbar,
  NewsLetter,
  Products,
  Slider,
} from "../components";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Catergories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
