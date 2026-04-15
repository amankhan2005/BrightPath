import { useState } from "react";
 import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function MainLayout({ children }) {
  const [topBarVisible, setTopBarVisible] = useState(true);

  return (
    <>
       <Navbar topBarVisible={topBarVisible} />
      <main>{children}</main>
      <Footer />
    </>
  );
}