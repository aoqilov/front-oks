import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const index = () => {
  console.log("asdasd");
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default index;
