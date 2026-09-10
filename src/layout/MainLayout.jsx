import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function MainLayout({ setOpenModal }) {
  return (
    <div className=" sticky flex flex-col min-h-screen">
      
      <Navbar setOpenModal={setOpenModal}/>

      <main className="grow pt-[70px]">
        {/* Page content yaha render hoga */}
        <Outlet context={{ setOpenModal }}/>
      </main>

        <Footer/>
     
    </div>
  );
}