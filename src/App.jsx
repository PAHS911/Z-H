import Card from "./component/card/Card";
import Catalog from "./component/catalog/Catalog";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Catalog />
      <Hero />
      <Card />
    </>
  );
}

export default App;
