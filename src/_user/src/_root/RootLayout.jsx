import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import ComplaintButton from "../components/Share/BottomMenu/BottomMenu";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="fixed bottom-4 right-4">
        <ComplaintButton />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;