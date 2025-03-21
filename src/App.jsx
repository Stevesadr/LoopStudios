import Herro from "./components/Herro";
import Section from "./components/Section";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Herro />
      </div>
      <div className="">
        <Section />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
