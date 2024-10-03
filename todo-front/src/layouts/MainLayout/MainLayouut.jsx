import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/NavBar/Footer"
export default function MainLayouut() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </>
  );
}
