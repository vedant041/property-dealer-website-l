import { useState, useRef, useEffect } from "react";
import { Bell, ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../redux/authSlice";

import ProfilePopup from "../common/Dropdowns/ProfilePopup";
import ConfirmModal from "../common/Modals/ConfirmModal";

export default function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const profileRef = useRef();


  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {

    function handleClick(e) {

      if (!profileRef.current?.contains(e.target)) {
        setShowProfile(false);
      }

    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);

  }, []);


  /* LOGOUT */
  function handleLogout() {

    setShowLogoutModal(false); // close modal first

    setTimeout(() => {

      dispatch(logout());
      navigate("/", { replace: true });

    }, 150);

  }


  return (
    <>

      {/* ================= HEADER ================= */}

      <header
        className="
          w-full
          h-[80px]
          flex
          items-center
          justify-between
          px-8
          relative
          z-50
          backdrop-blur-md
        "
        style={{
          background: "rgba(41,53,77,0.5)",
        }}
      >

        {/* LOGO */}
        <div className="flex items-center">
          <div
            className="
              bg-white/20
              px-6
              py-2
              rounded-md
              text-sm
              font-semibold
            "
          >
            Logo
          </div>
        </div>


        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* NOTIFICATION */}
          <button
            className="
              w-10 h-10
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              hover:bg-white/20
              transition
            "
          >
            <Bell size={18} />
          </button>


          {/* PROFILE */}
          <div ref={profileRef} className="relative">

            <button
              onClick={() => setShowProfile(!showProfile)}
              className="
                flex items-center gap-2
                px-3 py-1
                rounded-full
                bg-white/10
                hover:bg-white/20
                transition
              "
            >
              <img
                src="/LoginUserimg.jpg"
                className="w-7 h-7 rounded-full"
                alt="user"
              />

              <ChevronDown size={16} />
            </button>


            {/* DROPDOWN */}
            {showProfile && (
              <ProfilePopup
                onLogout={() => {
                  setShowProfile(false);
                  setShowLogoutModal(true);
                }}
              />
            )}

          </div>

        </div>


        {/* BORDER */}
        <div
          className="absolute bottom-0 left-0 w-full h-[2px]"
          style={{
            background:
              "linear-gradient(to right, #111629, #ffffff, #111629)",
          }}
        />

      </header>


      {/* ================= LOGOUT MODAL ================= */}

      {showLogoutModal && (

        <ConfirmModal
          title="Logout"
          message="Are you sure you want to Logout?"
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />

      )}

    </>
  );
}
