import Logout from "../components/Logout";
import Todos from "../components/Todos";

function Homepage() {
  return (
    <div>
      {/* <Signup /> */}
      <div className="container">
        <Todos />
        <Logout />
      </div>
    </div>
  );
}

export default Homepage;
