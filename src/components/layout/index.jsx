import React from "react";
import Navbar from "../navbar";
import Banner from "../banner";
import Footer from "../footer";
import Auth from "../auth";
import { Toaster } from "sonner";
import ReferalModal from "../modals/referral-modal";
import { useAuth } from "../../contexts/AuthContext";
import Loading from "../loading";

const RootLayout = ({ children }) => {

  const auth = useAuth();

  if (auth.loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Auth />
      <ReferalModal/>
      <Toaster richColors/>
      <div>
       
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
