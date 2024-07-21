import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import RootLayout from "./components/layout";
import Signup from "./components/auth/signup";
import Auth from "./components/auth";
import AuthModalProvider from "./contexts/AuthModalContext";
import { AuthProvider } from "./contexts/AuthContext";
import ReferalModalProvider from "./contexts/ReferralModalContext";

function App() {
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
