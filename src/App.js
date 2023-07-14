import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header.jsx";
import { ContactMe } from "./components/Contacts/contact_me/ContactMe";
import { Projects } from "./components/Projects/Projects";
import { Home } from "./components/Greeting/Home";

function App() {
  return (
    <div className="App">
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
