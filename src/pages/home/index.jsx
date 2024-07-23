import React, { useEffect, useState } from "react";
import Hero from "../../components/hero";
import LogoTicker from "../../components/logo-ticker";
import Features from "../../components/features";
import Cta from "../../components/cta";
import Faq from "../../components/faq";
import axios from "axios";
import { API_URL } from "../../constants";
import Loading from "../../components/loading";

const Home = () => {
  const [backendLoading, setBackendLoading] = useState(true);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await axios.get(`${API_URL}/health`);
        console.log(response, "HEALTH CHECK");
        setBackendLoading(false);
      } catch (error) {
        setBackendLoading(false);
      }
    };
    checkBackend();
  }, [setBackendLoading]);

  if (backendLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <main className="overflow-hidden">
      <Hero />
      <LogoTicker />
      <Features />
      <Faq />
      <Cta />
    </main>
  );
};

export default Home;
