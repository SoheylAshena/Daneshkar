import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ThemeProvider from "./Context/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
