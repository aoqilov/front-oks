import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default index;
