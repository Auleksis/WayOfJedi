import s from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <>
      <div className={s.app}>
        <Header />
      </div>

      <div className={s.main_container}>
        <div className={s.outlet}>
          <AboutPage />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
