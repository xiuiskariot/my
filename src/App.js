import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header.jsx";
import { ContactMe } from "./components/Contacts/contact_me/ContactMe";
import { Projects } from "./components/Projects/Projects";
import { Home } from "./components/Greeting/Home";
import Circles from "./components/Circles.jsx";

function App() {
  return (
    <div className="App">
      <Circles/>
      <Header />
      <main>
        <Home />
        <Projects />
        <ContactMe />
      </main>

      <Footer />
    </div>
  );
}

export default App;
