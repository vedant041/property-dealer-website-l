import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../redux/authSlice";

export default function useLogout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return handleLogout;
}
