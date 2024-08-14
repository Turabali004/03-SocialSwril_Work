import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
function App() {
  let navMenuItems = {
    home : "Home",
    contact : "Contact",
    about : "About",
  }
  return (
    <>
   <h1>This is my React app</h1>
   <Navbar menuItems={navMenuItems} />
   <Hero heroData={{name:'Alex' , expertise:'Frontend'}} />
   <Footer  />
   </>
  );
}

export default App;
