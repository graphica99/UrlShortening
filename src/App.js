import "./sass/main.scss";
import Nav from "../src/Layouts/Nav/Nav";
import Header from "../src/Layouts/Header/Header";
import Main from "../src/Layouts/Main/Main";
import Section from "../src/Layouts/Section/Section";
import Footer from "../src/Layouts/Footer/Footer";
function App() {
  return (
    <body>
      <Nav />
      <Header />
      <Main />
      <Section />
      <Footer />
    </body>
  );
}

export default App;
