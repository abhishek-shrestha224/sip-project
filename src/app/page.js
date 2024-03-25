import Abstracts from "./(views)/components/Abstracts";
import Banner from "./(views)/components/Banner";
import Gallery from "./(views)/components/Gallery";
import Landscapes from "./(views)/components/Landscapes";
import Portraits from "./(views)/components/Portraits";
import Welcome from "./(views)/components/Welcome";

const Home = () => {
  return (
    <section className="App">
      <Banner />
      <Welcome />
      <Gallery />
      <Portraits />
      <Landscapes />
      <Abstracts />
    </section>
  );
};

export default Home;
