import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='p-1 pt-3 md:p-6'>
      <div className="max-w-4xl m-auto" style={{opacity: 1}}>
      <Header />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
