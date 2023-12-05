import Logout from "../components/Logout";
import Todos from "../components/Todos";
import { useNavigate } from "react-router-dom";

function Todopage(isLoggedIn) {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/login");
  }
  // Check if the user is logged in
  // If not, you can redirect them to the login page
  // Or display a message indicating that they need to log in.
  return (
    <div>
      <div className="container">
        <Todos />
        <Logout />
      </div>
    </div>
  );
}

export default Todopage;
