import { Routes, Route, Navigate } from "react-router-dom";

/* WEBSITE */
import Home from "./pages/WebDesign/HomeWithoutLogin.jsx";
import DashboardWeb from "./pages/WebDesign/HomeWithLogin.jsx";
import AboutUs from "./pages/WebDesign/AboutUs.jsx";
import ContactUs from "./pages/WebDesign/ContactUs.jsx";
import PropertyDetails from "./pages/WebDesign/PropertyDetails.jsx";
import BuyShares from "./pages/WebDesign/BuyShares.jsx";
import SellShares from "./pages/WebDesign/SellShares.jsx";


/* OWNER */
import OwnerLayout from "./layout/PropertyOwner/Layout.jsx";
import OwnerDashboard from "./pages/PropertyOwner/Dashboard.jsx";
import OwnerProperties from "./pages/PropertyOwner/Properties.jsx";
import AddProperty from "./pages/PropertyOwner/AddProperty.jsx";
import Investors from "./pages/PropertyOwner/Investors.jsx"
/* AUTH */
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

export default function App() {
  return (
    <Routes>

      {/* WEBSITE */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/buy-shares" element={<BuyShares />} />
      <Route path="/sell-shares" element={<SellShares />} />

      {/* Website Dashboard */}
      <Route
        path="/with-login"
        element={
          <ProtectedRoute>
            <DashboardWeb />
          </ProtectedRoute>
        }
      />

      {/* OWNER DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <OwnerLayout />
          </ProtectedRoute>
        }
      >

        <Route index element={<OwnerDashboard />} />

        <Route path="properties" element={<OwnerProperties />} />

        <Route path="add-property" element={<AddProperty />} />

        <Route path="investors" element={<Investors />} />
 

      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}
