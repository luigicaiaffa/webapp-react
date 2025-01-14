import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <Main />
      </div>

      <Footer />
    </>
  );
}
