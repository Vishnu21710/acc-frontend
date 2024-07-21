import React from "react";
import Navbar from "../navbar";
import Banner from "../banner";
import Footer from "../footer";
import Auth from "../auth";
import { Toaster } from "sonner";
import ReferalModal from "../modals/referral-modal";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Auth />
      <ReferalModal/>
      <Toaster richColors/>
      <div>
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
