import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

export default function MainLayouut() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}
