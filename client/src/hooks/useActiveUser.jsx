import { useCookies } from "react-cookie";

/**
 * Hook to get active logged in user detail.
 * @typedef {Object} UserInfo
 * @property {string} name - User name
 * @property {string} email - User email
 * @property {function} logout - Remove user from cookie
 *
 * @returns {UserInfo|null}
 */
const useActiveUser = () => {
  const [cookies, , removeCookie] = useCookies(["user"]);

  const logout = () => removeCookie("user");

  if (!cookies.user) {
    return null;
  }

  const { name, email } = cookies.user;

  return { name, email, logout };
};

export default useActiveUser;
