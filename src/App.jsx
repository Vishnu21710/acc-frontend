import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import RootLayout from "./components/layout";
import AuthModalProvider from "./contexts/AuthModalContext";
import { AuthProvider } from "./contexts/AuthContext";
import ReferalModalProvider from "./contexts/ReferralModalContext";
import { useEffect, useState } from "react";
import { API_URL } from "./constants";
import Loading from "./components/loading";

function App() {

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
    <AuthModalProvider>
      <AuthProvider>
        <ReferalModalProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <RootLayout>
                    <Outlet />
                  </RootLayout>
                }
              >
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ReferalModalProvider>
      </AuthProvider>
    </AuthModalProvider>
  );
}

export default App;
