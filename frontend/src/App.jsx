import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import PhoneNumber from "./components/PhoneNumber";
import GetRate from "./components/GetRate";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Contact from "./components/ContactUs";

function App() {
  return (
    <div className="flex flex-col w-full   bg-[#f1f1f1]">
      <PhoneNumber />
      <Navbar />
      <Banner />
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
