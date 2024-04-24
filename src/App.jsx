import Footer from "./components/layout/footer/Footer.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
