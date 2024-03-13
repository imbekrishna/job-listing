import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

/**
 * Hook to prevent user from accessing protected routes without login.
 */
const useAuthGuard = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["user"]);

  useEffect(() => {
    console.log(cookies.user);
    if (!cookies?.user) {
      navigate("/login");
    }
  }, [cookies?.user, navigate]);
};

export default useAuthGuard;
