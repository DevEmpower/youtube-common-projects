import { lazy, Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";

// Ordinary Loading
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import FAQPage from "./pages/FAQPage";
// import ServicesPage from "./pages/ServicesPage";

// Lazy Loading
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));

const App = () => {
   return (
      <div className="app">
         <div className="links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/services">Services</Link>
         </div>
         <div className="wrapper">
            <Suspense fallback={<h1 className="loading">Loading....</h1>}>
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/services" element={<ServicesPage />} />
               </Routes>
            </Suspense>
         </div>
      </div>
   );
};

export default App;
