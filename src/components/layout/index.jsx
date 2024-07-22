import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Banner from "../banner";
import Footer from "../footer";
import Auth from "../auth";
import { Toaster } from "sonner";
import ReferalModal from "../modals/referral-modal";
import { API_URL } from "../../constants";
import Loading from "../loading";

const RootLayout = ({ children }) => {

  const [backendLoading, setBackendLoading] = useState(true)

  useEffect(()=>{
    const checkBackend = async()=>{
      try {
        const response = await axios.get(`${API_URL}/health`)
        console.log(response, "HEALTH CHECK");
        setBackendLoading(false)
      } catch (error) {
       setBackendLoading(false) 
      }
    }
    checkBackend()
  }, [setBackendLoading])

  if(backendLoading){
    return <Loading/>
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
