import s from "./App.module.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className={s.app}>
        <Header />
      </div>

      <div className={s.main_container}>
        <div className={s.outlet}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
